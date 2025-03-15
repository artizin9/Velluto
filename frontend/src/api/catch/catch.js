export const handleError = (err) => {
    if (err.response) {
        console.log("Erro na resposta: ", err.response.data)
        return err.response.data
    }

    if (err.request) {
        console.log("Erro na requisição: ", err.request)
        return err.request
    }

    if (err.message) {
        console.log("Erro: ", err.message)
        return err.message
    }
}