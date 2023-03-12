import { array, z } from 'zod';

export const createCategoriesSchemas = z.object({
  name: z.string().max(45)
})

export const returnCategoriesSchemas = createCategoriesSchemas.extend({ id: z.number() })

export const allCategoriesSchema = returnCategoriesSchemas.array()


export const categoryRealEstateSchema = z.object({
  id: z.number(),
  name: z.string(),
  realEstates: array(z.object({
    id: z.number(),
    sold: z.boolean(),
    value: z.any(),
    size: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    address: z.object({
      id: z.number(),
      street: z.string(),
      zipCode: z.string(),
      number: z.string().optional().nullable(),
      city: z.string(),
      state: z.string()
    }).optional().nullish(),
    category: z.object({
      id: z.number(),
      name: z.string()
    }).optional().nullish()
  }))
})
