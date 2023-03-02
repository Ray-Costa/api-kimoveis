import {Router} from 'express';
import { ensureDataIsValidMiddleware } from '../middlewares';
import { userSchemas } from '../schemas';
import { createUserController, deleteUserController, listUsersController, updateUserController } from '../controllers';
import {ensureUserExistsMiddleware} from '../middlewares/ensureUserExists.middleware';

export const usersRoutes: Router = Router()

usersRoutes.post('',ensureDataIsValidMiddleware(userSchemas),ensureUserExistsMiddleware, createUserController )
usersRoutes.get('',listUsersController )
usersRoutes.patch('/:id',ensureUserExistsMiddleware,updateUserController)
usersRoutes.delete('/:id', ensureUserExistsMiddleware, deleteUserController )
