import { register, login } from "../controllers/auth.controller.js"
import { registerSchema, loginSchema } from "../schemas/auth.schema.js"
import { authGuard } from "../middleware/guards.js"

export const authRoutes = (fastify) => {
  fastify.post("/register", async (req, res) => {
    try {
      const data = registerSchema.parse(req.body)
      await register({ body: data }, res)
    } catch (err) {
      res.status(400).send({
        message: "Erro ao criar usuário",
        error: err.errors
      })
    }
  })

  fastify.post("/login", authGuard, async (req, res) => {
    try {
      const data = loginSchema.parse(req.body)
      await login({ body: data }, res);
    } catch (error) {
      res.status(400).send({ error: error.errors })
    }
  })
}