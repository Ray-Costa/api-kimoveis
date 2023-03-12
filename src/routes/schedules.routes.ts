import { Router } from 'express';
import { createScheduleController, listSchedulesRealStateController } from '../controllers/schedules.controllers';
import { isUserLoggedMiddleware } from '../middlewares/isUserLogged.middleware';
import { ensureDataIsValidMiddleware } from '../middlewares';
import { createScheduleSchemas } from '../schemas/schedules.schemas';
import { isAdmin } from '../middlewares/isAdmin.middleware';

export const schedulesRoutes: Router = Router()

schedulesRoutes.post('', isUserLoggedMiddleware, ensureDataIsValidMiddleware(createScheduleSchemas), createScheduleController)
schedulesRoutes.get('/realEstate/:id', isAdmin, listSchedulesRealStateController)
