import { AppDataSource } from '../data-source';
import { User } from '../entities';
import { AppError } from '../errors';
import { Repository } from 'typeorm';


export const deleteUserService = async (idUser: number): Promise<void> => {

  const usersRepository: Repository<User> = AppDataSource.getRepository(User)

  const user = await usersRepository.findOne({
    where: {
      id: idUser

    }
  })
  await usersRepository.softRemove(user!)


}


