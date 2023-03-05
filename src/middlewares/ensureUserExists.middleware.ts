import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors';
import { Repository } from 'typeorm';
import { User } from '../entities';
import { AppDataSource } from '../data-source';


export const ensureUserExistsMiddleware = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const idUser: number = parseInt(request.params.id);

  const findUser = await userRepository.findOne({
    where: {
      id: idUser
    }
  })

  if (!findUser) {
    throw new AppError('User not found.', 404)
  }

  request.user = findUser;

  return next()
}
