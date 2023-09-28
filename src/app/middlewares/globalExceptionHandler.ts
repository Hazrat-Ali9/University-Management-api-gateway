import { AxiosError } from 'axios';
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import config from '../../config';
import ApiError from '../../errors/apiError';
import handleZodError from '../../errors/handleZodError';
import logger from '../../shared/logger';

const globalExceptionHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errorMessages: {
    path: string;
    message: string;
  }[] = [];

  let statusCode = 500;
  let message = 'Something went wrong';

  if (error instanceof AxiosError) {
    statusCode = error.response?.status || 500;
    message = error.response?.data?.message || 'Something went wrong';
    errorMessages = error.response?.data?.errorMessages || [];
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message
          }
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message
          }
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined
  });
};

export default globalExceptionHandler;
