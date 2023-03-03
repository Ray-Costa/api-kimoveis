import {Router} from 'express';
import { ensureDataIsValidMiddleware } from '../middlewares';
import {createLoginSchemas} from '../schemas';
import {createLoginCrontroller} from '../controllers';


export const loginRoutes: Router = Router()

loginRoutes.post('', ensureDataIsValidMiddleware(createLoginSchemas),createLoginCrontroller)
