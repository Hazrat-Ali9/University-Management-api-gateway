import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../errors/apiError';
import { JwtHelper } from '../../helpers/jwtHelper';
import { IAuthUser } from '../../interfaces/auth';

const auth =
  (...requiredRoles: string[]) =>
    async (req: any, res: Response, next: NextFunction) => {
      return new Promise(async (resolve, reject) => {
        const token = req.headers.authorization;

        if (!token) {
          return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized'));
        }

        const verifiedUser: IAuthUser = JwtHelper.verifyToken(token);

        if (!verifiedUser) {
          return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized'));
        }

        req.user = verifiedUser;

        if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
          return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
        }

        resolve(verifiedUser);
      })
        .then(() => next())
        .catch((err) => next(err));
    };

export default auth;
