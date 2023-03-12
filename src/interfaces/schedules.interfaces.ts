import {z}from 'zod';
import { createScheduleSchemas } from '../schemas/schedules.schemas';


export type  ICreateSchedule = z.infer<typeof createScheduleSchemas>

