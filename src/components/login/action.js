import { LOGIN } from './constant'

export const authenticateUser = (credentials) => {
    return {
        type: LOGIN,
        data: credentials
    }
}