import{Router} from 'express';
import { ensureDataIsValidMiddleware } from '../middlewares';
import { createLoginSchemas } from '../schemas';
import { createLoginCrontroller } from '../controllers';


export const realEstateRoutes: Router = Router()

realEstateRoutes.post('', ensureDataIsValidMiddleware(createLoginSchemas),createLoginCrontroller)
