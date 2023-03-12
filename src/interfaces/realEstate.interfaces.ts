import { z } from 'zod';
import {
  allRealEstateSchema,
  createRealEstateSchemas,
  returnRealEstateSchemas
} from '../schemas/realEstate.schemas';

export type ICreateRealEstate = z.infer<typeof createRealEstateSchemas>

export type IRealEstateReturn = z.infer<typeof allRealEstateSchema>
export type IRealEstateSingleReturn = z.infer<typeof returnRealEstateSchemas>
export type ICreateRealEstateSingleReturn = z.infer<typeof returnRealEstateSchemas>

