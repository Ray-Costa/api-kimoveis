import {allUsersSchema} from '../schemas';
import { IUsersReturn } from '../interfaces';
import { AppDataSource } from '../data-source';
import { User } from '../entities';

export const listUsersService= async ():Promise<IUsersReturn> => {

  const usersRepository = AppDataSource.getRepository(User)

  const users = await usersRepository.find()

  const allUsers = allUsersSchema.parse(users)

  return allUsers
}
