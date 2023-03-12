import { z } from 'zod'
import { hashSync } from 'bcryptjs';

export const userSchemas = z.object({
  name: z.string().min(3).max(45),
  email: z.string().email().max(45),
  password: z.string().min(4).max(20).transform((pass) => {
    return hashSync(pass, 10)
  }),
  admin: z.boolean().optional().default(false),
  // active: z.boolean().optional().default(true)
})

export const returnUserSchema = userSchemas.extend({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
  schedules: z.any().optional()
}).omit({ password: true })

export const allUsersSchema = returnUserSchema.array()

export const userUpdateSchema = userSchemas.partial()
