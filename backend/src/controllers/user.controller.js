import { prisma } from "../config/prisma.js";

export const me = async (req, res) => {
    const { id } = req.user
    const data =  { id: true, email: true, name: true }

    const user = await prisma.user.findMany({
        where: { id },
        select: data
    })

    if (!user) {
        return res.status(404).send({ message: "Usuário não encontrado" });
    }

    return res.status(200).send(user)
}

export const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!id) return res.status(400).send({ message: "ID do usuário não informado" })

    const user = await prisma.user.findUnique({
        where: { id },
    })

    if (!user) return res.status(404).send({ message: "Usuário não encontrado"})

    await prisma.user.delete({
        where: { id }
    })
    
    res.send({ message: `Usuário deletado com sucesso`})
}