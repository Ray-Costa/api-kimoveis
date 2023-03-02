import { IUserRequest } from '../interfaces';
import { Request, Response } from 'express';
import { createUserService, deleteUserService, listUsersService } from '../services';
import { updateUserService } from '../services/updateUser.service';


 export const createUserController = async (request: Request, response: Response): Promise<Response> => {

  const userData: IUserRequest = request.body

  // @ts-ignore
  const newUser = await createUserService(userData)

  return response.status(201).json(newUser)
}

  export const listUsersController = async (request: Request, response: Response): Promise<Response> => {

   const users = await listUsersService()

    return response.json(users)

  }

  export const deleteUserController = async (request: Request, response: Response) => {

   await deleteUserService(parseInt(request.params.id))

    return response.status(204).send()
  }

export const updateUserController = async (request: Request, response: Response) => {

    const userData = request.body

    const idUser = parseInt(request.params.id)

    const updateUser = await updateUserService(idUser, userData)

    return response.status(200).json(updateUser);
}
