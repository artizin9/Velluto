import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'

export const authMiddleware = async (req, res, next) => {
    try {
        const authMiddle = req.cookies.token
        if (!authMiddle) throw new Error('token inválido')
        
        const token = authMiddle.replace('Bearer ', '')
        const decoded = jwt.verify(token, env.JWT_SECRET)
        req.user = decoded

        next()
    } catch (err) {
        res.status(401).send({ error: 'Não autorizado' })
    }
}

