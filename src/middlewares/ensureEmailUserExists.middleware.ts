import {NextFunction,Request,Response} from 'express';
import {Repository} from 'typeorm';
import {User} from '../entities';
import {AppDataSource} from '../data-source';
import {AppError} from '../errors';

export const ensureUserExistsMiddleware = async (request:Request,response:Response,next:NextFunction):Promise<void> => {

  const userRepository:Repository<User> = AppDataSource.getRepository(User);

  const emailUser = request.body.email;

  if(emailUser){
    const findEmailUser = await userRepository.findOneBy({
      email:emailUser
    })

    if(findEmailUser){
      throw new AppError('Email already exists.',409)
    }
  }
  return next()


}
