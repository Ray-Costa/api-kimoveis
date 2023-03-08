import {allUsersSchema} from '../schemas';
import { IUsersReturn } from '../interfaces';
import { AppDataSource } from '../data-source';
import { User } from '../entities';
import { Repository } from 'typeorm';

export const listUsersService= async ():Promise<IUsersReturn> => {

  const usersRepository:Repository<User> = AppDataSource.getRepository(User)

  const users = await usersRepository.find({
    withDeleted:true

  })

  return  allUsersSchema.parse(users)


}
