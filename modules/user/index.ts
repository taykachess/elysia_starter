import { Elysia, t } from 'elysia'
import { userSchema } from './schemas/userSchema'
import { loginHandler } from './services/login'

const route = 'user'

// export const userRouter = (app: Elysia) => app.group(route, groupHandler)

export const userRouter = (app: Elysia) => app.get('/problem', () => 'problem')
