import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentService } from './student.service';

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getMyCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyAcademicInfos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getMyAcademicInfos(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCourseSchedules = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getMyCourseSchedules(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getStudentProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getStudentProfile(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneInDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("controller")
    const result = await StudentService.updateOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.deleteByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentController = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  getMyCourses,
  getMyCourseSchedules,
  getMyAcademicInfos,
  getStudentProfile
};
