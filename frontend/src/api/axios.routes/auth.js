import { api } from '../config/axios.config'
import { handleError } from '../catch/catch'

const modelAuthRequest = async (url, payload) => {
    try {
        const { data } = await api.post(url, payload)
        return data
    } catch (err){
        handleError(err)
}}

export const register = async (data) => modelAuthRequest('/register', data)

export const login = async (data) => modelAuthRequest('/login', data)