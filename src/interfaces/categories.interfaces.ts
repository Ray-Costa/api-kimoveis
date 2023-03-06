import { z } from 'zod';
import { allCategoriesSchema, allUsersSchema, createCategoriesSchemas } from '../schemas';

export type ICategories = z.infer<typeof createCategoriesSchemas>

export type ICategoriesReturn = z.infer<typeof allCategoriesSchema>
