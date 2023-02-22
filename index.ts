import { Elysia } from 'elysia'

import { userRouter } from './modules/user'

const server = new Elysia().use(userRouter).listen('8080', () => {
    console.log('server is running on port 8080')
})
