import { AppDataSource } from '../data-source';
import { User } from '../entities';
import { AppError } from '../errors';


export const deleteUserService = async (user: User): Promise<void> => {

  const usersRepository = AppDataSource.getRepository(User)

  if(user.active === false){
    throw new AppError('User already deleted', 400)

  }

  await usersRepository.save({
    ...user,
    active: false
  } as User);

}


