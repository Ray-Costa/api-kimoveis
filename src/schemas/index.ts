import { allUsersSchema, returnUserSchema, userSchemas } from './user.schemas';
import { createLoginSchemas } from './login.schemas';
import { createCategoriesSchemas, returnCategoriesSchemas,allCategoriesSchema } from './categories.schemas';
import{returnRealEstateSchemas,allRealEstateSchema} from './realEstate.schemas';
import{returnScheduleSchemas} from './schedules.schemas';


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
  returnScheduleSchemas
}
