import { allUsersSchema, returnUserSchema, userSchemas } from '../schemas';
import { z } from 'zod';
import { userUpdateSchema } from '../schemas/user.schemas';

export type IUserRequest = z.infer<typeof userSchemas>

export type IUser = z.infer<typeof returnUserSchema>

export type IUsersReturn = z.infer<typeof allUsersSchema>

export type  IUserUpdate = z.infer<typeof userUpdateSchema>


