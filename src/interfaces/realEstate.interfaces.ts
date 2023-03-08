import { z } from 'zod';
import { allRealEstateSchema, createRealEstateSchemas } from '../schemas/realEstate.schemas';
import { allCategoriesSchema } from '../schemas';

export type ICreateRealEstate = z.infer<typeof createRealEstateSchemas>

export type IRealEstateReturn = z.infer<typeof allRealEstateSchema>

