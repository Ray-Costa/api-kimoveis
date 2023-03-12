import { allUsersSchema, returnUserSchema, userSchemas } from './user.schemas';
import { createLoginSchemas } from './login.schemas';
import { allCategoriesSchema, createCategoriesSchemas, returnCategoriesSchemas } from './categories.schemas';
import { allRealEstateSchema, returnRealEstateSchemas } from './realEstate.schemas';
import { returnScheduleSchemas,realEstateSchedulesSchema } from './schedules.schemas';
import {categoryRealEstateSchema} from './categories.schemas';


export {
  returnUserSchema,
  userSchemas,
  allUsersSchema,
  createLoginSchemas,
  createCategoriesSchemas,
  returnCategoriesSchemas,
  allCategoriesSchema,
  returnRealEstateSchemas,
  allRealEstateSchema,
  returnScheduleSchemas,
  realEstateSchedulesSchema,
  categoryRealEstateSchema
}
