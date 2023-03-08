import { NextFunction, Request, Response } from 'express';
import { isTokenValid } from '../../utils/jwt.verify';
import { AppError } from '../errors';

export const isUserLoggedMiddleware = (request: Request, response: Response, next: NextFunction) => {
  const token = request.headers.authorization;
  if (!token) {
    throw new AppError('Token is required', 401)
  }

  const { payload }: any = isTokenValid(token.replace('Bearer ', ''))

  request.userId = payload.sub;

  return next()
}
