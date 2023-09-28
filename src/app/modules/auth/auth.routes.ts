import express from 'express';
import { AuthenticationController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
    '/login',
    validateRequest(AuthValidation.loginZodSchema),
    AuthenticationController.loginUser
);
router.post(
    '/refresh-token',
    validateRequest(AuthValidation.refreshTokenZodSchema),
    AuthenticationController.refreshToken
);

router.post(
    '/change-password',
    auth(
        ENUM_USER_ROLE.SUPER_ADMIN,
        ENUM_USER_ROLE.ADMIN,
        ENUM_USER_ROLE.STUDENT,
        ENUM_USER_ROLE.FACULTY
    ),
    validateRequest(AuthValidation.changePasswordZodSchema),
    AuthenticationController.changePassword
);

export const authRoutes = router;