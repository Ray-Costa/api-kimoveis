import { AppError } from '../../errors';
import jwt from 'jsonwebtoken';
import { ILogin } from '../../interfaces';
import { User } from '../../entities';
import { AppDataSource } from '../../data-source';
import { Repository } from 'typeorm';
import 'dotenv/config';
import { compare } from 'bcryptjs';


export const createLoginService = async (loginData: ILogin): Promise<string> => {

  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const user: User | null = await userRepository.findOneBy({ email: loginData.email })

  if (!user) {
    throw new AppError('Wrong email or password', 401)
  }

  const passwordMatch = await compare(loginData.password, user.password)

  if(!passwordMatch){
    throw new AppError('Wrong email or password', 401)
  }

  const token: string = jwt.sign(
    {

      role: user.admin ? 'admin' : 'user'
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: '24h',
      subject: String(user.id)
    }
  )
  return token
}
