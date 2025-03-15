import { Login as login, Register as register} from "./auth.routes.js"
import { meRoutes, userDeleteRoutes } from "./user.routes.js"

export const registerRoutes = (fastify) => {
    fastify.register(register)

    fastify.register(login)

    fastify.register(meRoutes)

    fastify.register(userDeleteRoutes)
}