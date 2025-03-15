import { api } from '../config/axios.config'
import { handleError } from '../catch/catch'

export const me = async () => {
    try {
        const response = await api.get('/me')
        return response.data
    } catch (err){
        handleError(err)
    }
}