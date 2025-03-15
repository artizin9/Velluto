import Fastify from 'fastify'
import cookie from '@fastify/cookie'
import { env } from './config/env.js'
import { registerRoutes } from './routes/register.routes.js'

const fastify = Fastify()
fastify.register(registerRoutes)

fastify.register(cookie, {
    secret: env.COOKIE_SECRET,
    parseOptions: {}
})

fastify.listen({ port: env.PORT }, (err) => {
    err ? console.log(err) :
    console.log(`Server listening on ${env.PORT}`)
})