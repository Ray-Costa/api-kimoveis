import { NextFunction, Request, Response } from 'express';
import { isTokenValid } from '../../utils/jwt.verify';
import { AppError } from '../errors';


export const isOwnerOrAdmin = (request: Request, response: Response, next: NextFunction) => {
  try {
    const token = request.headers.authorization;
    if (!token) {
      throw new AppError('Token is required', 401)
    }

    const { payload }: any = isTokenValid(token.replace('Bearer ', ''))

    if (payload && payload.admin) {
      return next()
    } else {
      if (String(payload.sub) !== String(request.params.id)) {
        throw new AppError('Insufficient permission', 403)
      } else {
        delete request.body.admin;
      }
    }
  } catch (error: any) {
    throw new AppError(error.message, error.statusCode || 401);
  }
}
