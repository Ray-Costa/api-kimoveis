import { Router } from 'express';
import { createScheduleController } from '../controllers/schedules.controllers';
import { isUserLoggedMiddleware } from '../middlewares/isUserLogged.middleware';
import { ensureDataIsValidMiddleware } from '../middlewares';
import { createScheduleSchemas } from '../schemas/schedules.schemas';

export const schedulesRoutes: Router = Router()

schedulesRoutes.post('', ensureDataIsValidMiddleware(createScheduleSchemas), isUserLoggedMiddleware, createScheduleController)
