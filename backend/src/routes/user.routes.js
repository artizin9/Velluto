import { me, deleteUser } from "../controllers/user.controller.js";
import { authGuard } from "../middleware/guards.js";

export const meRoutes = (fastify) => {
    fastify.get(`/me`, authGuard, async (req, res) => {
        await me(req, res)
    })
}

export const userDeleteRoutes = (fastify) => {
    fastify.delete("/me/:id", authGuard, async (req, res) => {
        await deleteUser(req, res)
    })
}