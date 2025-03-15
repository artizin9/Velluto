import { authMiddleware } from "./auth.js"

export const authGuard = { preHandler: authMiddleware}
