import { z } from 'zod'

export const registerSchema = z.object({
    name: z.string().min(3).max(255, "erro"),
    email: z.string().email("email invaludo"),
    password: z.string().min(6).max(255, "senha erro")
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(255)
})