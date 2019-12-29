import { FETCH_USER, FETCH_USER_SUCCEED } from './constant'

const initialState = {
    loading: false,
    current_user: []
}
const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCEED:
            return {
                ...state,
                current_user: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
export default AppReducer