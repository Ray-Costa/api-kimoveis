import { IUser, IUserRequest } from '../interfaces';
import { AppDataSource } from '../data-source';
import { User } from '../entities';
import { Repository } from 'typeorm';
import { returnUserSchema } from '../schemas';


export const createUserService = async (userData: IUserRequest): Promise<IUser> => {

  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const user = userRepository.create(userData)

  await userRepository.save(user)

  const newUser = returnUserSchema.parse(user);

  return newUser;

}
