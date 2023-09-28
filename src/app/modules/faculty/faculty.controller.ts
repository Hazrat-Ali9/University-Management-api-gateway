import { NextFunction, Request, Response } from "express";
import { FacultyService } from "./faculty.service";
import sendResponse from "../../../shared/response";

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await FacultyService.getAllFromDB(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const getMyCourses = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await FacultyService.getMyCourses(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const getMyCourseStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await FacultyService.getMyCourseStudents(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await FacultyService.getByIdFromDB(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const getFacultyProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await FacultyService.getFacultyProfile(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const updateOneInDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await FacultyService.updateOneInDB(req);
        sendResponse(res, result)
    }
    catch (error) {
        next(error);
    }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await FacultyService.deleteByIdFromDB(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

export const FacultyController = {
    updateOneInDB,
    getAllFromDB,
    getByIdFromDB,
    getFacultyProfile,
    getMyCourseStudents,
    getMyCourses,
    deleteByIdFromDB
}