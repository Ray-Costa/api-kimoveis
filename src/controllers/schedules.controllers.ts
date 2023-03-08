import { Request, Response } from 'express';
import { createScheduleService } from '../services/schedules/schedules.service';

export const createScheduleController = async (request: Request, response: Response) => {

  const scheduleData = request.body

  const newSchedule = await createScheduleService(scheduleData, request.userId)

  return response.status(201).json(newSchedule)
}
