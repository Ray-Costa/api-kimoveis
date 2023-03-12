import { z } from 'zod';
import {
  allCategoriesSchema,
  allUsersSchema,
  createCategoriesSchemas,
  returnCategoryRealEstateSchema
} from '../schemas';

export type ICategories = z.infer<typeof createCategoriesSchemas>

export type ICategoriesReturn = z.infer<typeof allCategoriesSchema>

export type ICategoriesRealEstate = z.infer<typeof returnCategoryRealEstateSchema>
