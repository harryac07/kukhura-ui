import { LOGIN, CHECK_AUTHENTICATION } from './constant'

export const authenticateUser = (credentials) => {
    return {
        type: LOGIN,
        data: credentials
    }
}
export const checkAuthentication = () => {
    const token = localStorage.getItem('auth_token');
    return {
        type: CHECK_AUTHENTICATION,
        data: token || ""
    }
}