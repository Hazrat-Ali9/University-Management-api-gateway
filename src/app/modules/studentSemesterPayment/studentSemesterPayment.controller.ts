import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentSemesterPaymentService } from './studentSemesterPayment.service';

const getMyPayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentSemesterPaymentService.getMyPayment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const initiatePayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentSemesterPaymentService.initiatePayment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const completePayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentSemesterPaymentService.completePayment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentSemesterPaymentController = {
  getMyPayment,
  initiatePayment,
  completePayment
};
