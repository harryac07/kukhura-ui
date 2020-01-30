import { LOGIN, LOGIN_SUCCEED, LOGIN_FAILED, CHECK_AUTHENTICATION_SUCCEED } from './constant'

const initialState = {
    loading: false,
    loggedIn: false,
    user: []
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loading: true,
                loggedIn: false
            }
        case LOGIN_SUCCEED:
            return {
                ...state,
                loggedIn: true,
                user: action.payload,
                loading: false
            }
        case CHECK_AUTHENTICATION_SUCCEED:
            return {
                ...state,
                loggedIn: true,
                loading: false
            }
        default:
            return state;
    }
}
export default loginReducer