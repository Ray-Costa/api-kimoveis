import {Request, Response} from 'express';
import { createLoginService } from '../services/login/createLogin.service';
import { ILogin } from '../interfaces';

export const createLoginCrontroller = async (request:Request, response:Response):Promise<Response> => {

  const loginData:ILogin = request.body

  const token = await  createLoginService(loginData)

  return response.json({token: token})
}
