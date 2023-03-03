import {z} from 'zod';

import {createLoginSchemas} from '../schemas';


export type ILogin = z.infer<typeof createLoginSchemas>
