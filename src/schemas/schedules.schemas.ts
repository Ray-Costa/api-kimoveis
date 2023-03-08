import { z } from 'zod';

export const createScheduleSchemas = z.object({
  date: z.preprocess((date) => {
    if (typeof date === 'string' || date instanceof Date) {
      return new Date(date)
    }
  }, z.date()),
  hour: z.string(),
  realEstateId: z.number(),
})

export const returnScheduleSchemas = createScheduleSchemas.extend({
  id: z.number()
})
