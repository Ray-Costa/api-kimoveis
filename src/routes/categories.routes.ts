import { Router } from 'express';
import { ensureDataIsValidMiddleware } from '../middlewares';
import { createCategoriesSchemas } from '../schemas';
import { createCategoryController, listCategoriesController, listCategoriesRealEstateController } from '../controllers';
import { ensureNameCategoryExistsMiddleware } from '../middlewares/ensureNameCategoryExists.middleware';
import { isAdmin } from '../middlewares/isAdmin.middleware';


export const categoriesRoutes: Router = Router()

categoriesRoutes.post('', ensureDataIsValidMiddleware(createCategoriesSchemas), isAdmin, ensureNameCategoryExistsMiddleware, createCategoryController)
categoriesRoutes.get('', listCategoriesController)
categoriesRoutes.get('/:id/realEstate', listCategoriesRealEstateController)
