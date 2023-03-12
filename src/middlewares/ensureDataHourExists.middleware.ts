import {NextFunction,Response,Request} from 'express';
import { Repository } from 'typeorm';
import { Schedule, User } from '../entities';
import { AppDataSource } from '../data-source';
import { AppError } from '../errors';


export const ensureDataHourExistsMiddleware = (request:Request,response:Response,next:NextFunction):Promise<void> => {

  const scheduleRepository = AppDataSource.createQueryBuilder(Schedule,'schedule')


}

// const userRepository: Repository<User> = AppDataSource.getRepository(User);
//
// const emailUser = request.body.email;
//
// if (emailUser) {
//   const findEmailUser = await userRepository.findOneBy({
//     email: emailUser
//   })
//
//   if (findEmailUser) {
//     throw new AppError('Email already exists.', 409)
//   }
// }
// return next()
