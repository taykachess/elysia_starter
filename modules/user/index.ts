import { Elysia, t } from 'elysia'
import { userSchema } from './schemas/userSchema'
import { loginHandler } from './services/login'

const route = 'user'

export const userRouter = (app: Elysia) => app.group(route, groupHandler)

const groupHandler = (app: Elysia) =>
    app.post('/login', loginHandler, {
        schema: userSchema,
    })
