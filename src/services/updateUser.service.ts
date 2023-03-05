import { IUser, IUserUpdate } from '../interfaces/users.interface';
import { Repository } from 'typeorm';
import { User } from '../entities';
import { AppDataSource } from '../data-source';
import { returnUserSchema } from '../schemas';


export const updateUserService = async (oldUser: User, userData: IUserUpdate): Promise<IUser> => {

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.save({
    ...oldUser,
    ...userData
  } as User);

  const updateUser = returnUserSchema.parse(user);

  return updateUser;
}
