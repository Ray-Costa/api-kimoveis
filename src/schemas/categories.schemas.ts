import { z } from 'zod';

export const createCategoriesSchemas = z.object({
  name: z.string().min(5).max(45)
})

export const returnCategoriesSchemas = createCategoriesSchemas.extend({ id: z.number() })

export const allCategoriesSchema = returnCategoriesSchemas.array()
