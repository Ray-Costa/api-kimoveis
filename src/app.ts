import 'express-async-errors'
import express, { Application } from 'express';
import { handleErrors } from './errors';
import {usersRoutes} from './routes/users.routes';
import { loginRoutes } from './routes/login.routes';
import { categoriesRoutes } from './routes/categories.routes';


export const app: Application = express()
app.use(express.json())

app.use('/users', usersRoutes)
app.use('/login', loginRoutes)
app.use('/categories', categoriesRoutes)

app.use(handleErrors)


