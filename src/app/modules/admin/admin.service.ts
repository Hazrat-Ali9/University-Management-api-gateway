import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await AuthService.get('/admins', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
    const { id } = req.params;
    const response: IGenericResponse = await AuthService.get(`/admins/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {
    const { id } = req.params;
    const response: IGenericResponse = await AuthService.patch(`/admins/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
    const { id } = req.params;
    const response: IGenericResponse = await AuthService.delete(`/admins/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
};

export const AdminService = {
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB
};