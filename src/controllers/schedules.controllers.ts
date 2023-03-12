import { Request, Response } from 'express';
import { createScheduleService } from '../services/schedules/schedules.service';
import{listSchedulesRealStateService} from '../services/schedules/listSchedulesRealState.service';

export const createScheduleController = async (request: Request, response: Response) => {

  const scheduleData = request.body

  await createScheduleService(scheduleData, request.userId)

  return response.status(201).json({ message: "Schedule created" })
}

export const listSchedulesRealStateController = async (request: Request, response: Response) => {

  const realEstateId = parseInt(request.params.id)

  const listSchedules = await listSchedulesRealStateService(realEstateId)

  return response.status(200).json(listSchedules)
}
