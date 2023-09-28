import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentEnrolledCourseMarkService } from './studentEnrolledCourseMark.service';

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseMarkService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getStudentMarks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseMarkService.getStudentMarks(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateMarks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseMarkService.updateMarks(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateCourseFinalMarks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseMarkService.updateCourseFinalMarks(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentEnrolledCourseMarkController = {
  getAllFromDB,
  updateMarks,
  updateCourseFinalMarks,
  getStudentMarks
};
