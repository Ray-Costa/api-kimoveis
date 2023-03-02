import { IUser, IUsersReturn, IUserUpdate } from '../interfaces/users.interface';
import { Repository } from 'typeorm';
import { User } from '../entities';
import { AppDataSource } from '../data-source';
import { returnUserSchema } from '../schemas';



export const updateUserService = async (idUser: number, userData:IUserUpdate): Promise<IUser> => {

  const userRepository:Repository<User> = AppDataSource.getRepository(User);

  const oldUser = await userRepository.findOne({
  where:{
      id:idUser
  }
  })

  const user = await userRepository.save({
    ...oldUser,
    ...userData
  }as User);

  const updateUser = returnUserSchema.parse(user);

  return updateUser;
}
