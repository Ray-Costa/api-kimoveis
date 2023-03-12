import { NextFunction, Request, Response } from 'express';
import { isTokenValid } from '../../utils/jwt.verify';
import { AppError } from '../errors';

export const isUserLoggedMiddleware = (request: Request, response: Response, next: NextFunction) => {
  try {
    const token = request.headers.authorization;
    if (!token) {
      throw new AppError('Missing bearer token', 401)
    }

    const { payload }: any = isTokenValid(token.replace('Bearer ', ''))

    request.userId = payload.sub;

    return next()
  } catch (error: any) {
    throw new AppError(error.message, error.statusCode || 401);
  }
}
