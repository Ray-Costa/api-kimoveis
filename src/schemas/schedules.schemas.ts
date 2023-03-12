import { z } from 'zod';

export const createScheduleSchemas = z.object({
  date: z.preprocess((date) => {
    if (typeof date === 'string' || date instanceof Date) {
      return new Date(date)
    }
  }, z.date()),
  hour: z.string(),
  realEstateId: z.number()
})

export const returnScheduleSchemas = createScheduleSchemas.extend({
  id: z.number()
})

export const realEstateSchedulesSchema = z.object({
  id: z.number(),
  value: z.any(),
  size: z.number(),
  sold: z.boolean(),
  address: z.object({
    id: z.number(),
    street: z.string(),
    zipCode: z.string(),
    number: z.string().optional().nullable(),
    city: z.string(),
    state: z.string()
  }),
  category: z.object({
    id: z.number(),
    name: z.string()
  }).nullish(),
  schedules: z.array(z.object({
    id: z.number(),
    date: z.string(),
    hour: z.string(),
    user: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
      admin: z.boolean(),
      createdAt: z.date(),
      updatedAt: z.date(),
      deletedAt: z.date().optional().nullable(),
      password: z.string()
    }).omit({ password: true })
  }))
})



