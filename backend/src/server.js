import Fastify from 'fastify'
import { env } from './config/env.js'
import { authRoutes } from './routes/auth.routes.js'

const fastify = Fastify()
fastify.register(authRoutes)

fastify.listen({ port: env.PORT }, (err) => {
    err ? console.log(err) :
    console.log(`Server listening on ${env.PORT}`)
})