import { Router } from 'express';
import { ensureDataIsValidMiddleware } from '../middlewares';
import { userSchemas } from '../schemas';
import { createUserController, deleteUserController, listUsersController, updateUserController } from '../controllers';
import { ensureUserExistsMiddleware } from '../middlewares/ensureUserExists.middleware';
import { ensureEmailUserExistsMiddleware } from '../middlewares/ensureEmailUserExists.middleware';
import { userUpdateSchema } from '../schemas/user.schemas';
import { isAdmin } from '../middlewares/isAdmin.middleware';
import { ensureValidTokenMiddlewares } from '../middlewares/ensureValidToken.middleware';

export const usersRoutes: Router = Router()

usersRoutes.post('', ensureDataIsValidMiddleware(userSchemas), ensureEmailUserExistsMiddleware, createUserController)
usersRoutes.get('',ensureValidTokenMiddlewares, isAdmin,listUsersController)
usersRoutes.patch('/:id', ensureDataIsValidMiddleware(userUpdateSchema),ensureValidTokenMiddlewares, ensureUserExistsMiddleware, updateUserController)
usersRoutes.delete('/:id',ensureValidTokenMiddlewares,isAdmin, ensureUserExistsMiddleware, deleteUserController)
