import { z } from 'zod'
import { hashSync } from 'bcryptjs';

export const userSchemas = z.object({
  name: z.string().min(3).max(45),
  email: z.string().email().min(10).max(45),
  password: z.string().min(4).max(20).transform((pass) => {
    return hashSync(pass, 10)
  }),
  admin: z.boolean().optional().default(false),
})

export const returnUserSchema = userSchemas.extend({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable()
}).omit({ password: true })

export const allUsersSchema = returnUserSchema.array()

export const userUpdateSchema = userSchemas.pick({ name: true, email: true, password: true })
