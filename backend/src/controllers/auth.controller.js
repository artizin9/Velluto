import { prisma } from "../config/prisma.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { env }from "../config/env.js"

export const register = async (req, res) => {
    const { name, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    const token = jwt.sign({ userId: user.id}, env.JWT_SECRET, { expiresIn: "1h" })
    res.send({ message: "Usuário criado com sucesso", userId: "Id: " + user.id, token: "Token: " + token})
}

export const login = async (req, res) => {
    const { email, password } = req.body

    const user = await prisma.user.findUnique({ where: { email } })

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!user || !isPasswordValid) {
        return res.status(401).send({ message: "Credenciais inválidas" })
    }

    res.send({ message: "Usuário autenticado com sucesso!" })
}