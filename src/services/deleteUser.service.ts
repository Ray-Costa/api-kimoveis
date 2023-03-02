import { AppDataSource } from '../data-source';
import { User } from '../entities';


export const deleteUserService = async(idUser:number):Promise<void> => {

  const usersRepository = AppDataSource.getRepository(User)

  const user = await usersRepository.findOne({
    where:{
      id:idUser
    }
  });

  await usersRepository.remove(user!)
}
