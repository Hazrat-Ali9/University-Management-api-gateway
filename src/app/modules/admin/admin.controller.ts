import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AdminService } from './admin.service';

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AdminService.getAllFromDB(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AdminService.getByIdFromDB(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const updateOneInDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AdminService.updateOneInDB(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AdminService.deleteByIdFromDB(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

export const AdminController = {
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB
};