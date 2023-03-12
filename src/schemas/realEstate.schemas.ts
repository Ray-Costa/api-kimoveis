import { array, z } from 'zod';
import { returnCategoriesSchemas } from './categories.schemas';

export const addressCreateSchema = z.object({
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).optional().nullable(),
  city: z.string().max(20),
  state: z.string().max(2)
})

export const createRealEstateSchemas = z.object({
  value: z.number(),
  size: z.number().positive(),
  categoryId: z.number(),
  address: addressCreateSchema
})

export const addressReturnSchema = addressCreateSchema.extend({
  id: z.number()
})

export const returnRealEstateSchemas = z.object({
  id: z.number(),
  sold: z.boolean().optional().default(false),
  value: z.any(),
  size: z.number(),
  address: addressReturnSchema,
  category: returnCategoriesSchemas.nullish(),
  createdAt: z.date(),
  updatedAt: z.date()
})

export const allRealEstateSchema = array(returnRealEstateSchemas);

