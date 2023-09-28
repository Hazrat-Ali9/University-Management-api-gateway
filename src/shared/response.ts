import { Response } from 'express';

interface IResponse {
  success: boolean;
  statusCode: number;
  message?: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: unknown;
}

const sendResponse = <T>(
  res: Response,
  data: {
    statusCode: number;
    success: boolean;
    message?: string;
    meta?: {
      page: number;
      limit: number;
      total: number;
    };
    data?: T;
  }
) => {
  const response: IResponse = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message || 'Success',
    meta: data.meta,
    data: data.data || null
  };

  res.status(data.statusCode).json(response);
};

export default sendResponse;
