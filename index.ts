import { Elysia } from 'elysia'

import { userRouter } from './modules/user'

const server = new Elysia()
    .group('/user', userRouter)
    .get('/hello', () => 'world')
    .group('/d', (app) => app.get('/nice', () => ''))
    .listen('8080', () => {
        console.log('server is running on port 8080')
    })

export type App = typeof server
