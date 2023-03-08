import { Router } from 'express';
import { ensureDataIsValidMiddleware } from '../middlewares';
import { createRealEstateController } from '../controllers';
import { createRealEstateSchemas } from '../schemas/realEstate.schemas';
import { ensureAddressRealEstateExistsMiddleware } from '../middlewares/ensureAddressRealEstateExists.middleware';
import { listAllRealEstateController } from '../controllers/realEstate.controllers';
import { isAdmin } from '../middlewares/isAdmin.middleware';


export const realEstateRoutes: Router = Router()

realEstateRoutes.post('', ensureDataIsValidMiddleware(createRealEstateSchemas),isAdmin, ensureAddressRealEstateExistsMiddleware, createRealEstateController)
realEstateRoutes.get('', listAllRealEstateController)
