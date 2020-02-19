import { FETCH_POST_CATEGORIES_SUCCEED, CREATE_POST, CREATE_POST_SUCCEED, CREATE_POST_FAILED } from './constant'

const initialState = {
    loading: false,
    postCategories: []
}
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST_CATEGORIES_SUCCEED:
            return {
                ...state,
                postCategories: action.payload
            }
        case CREATE_POST:
            return {
                ...state,
                post_created: false
            }
        case CREATE_POST_SUCCEED:
            return {
                ...state,
                post_created: true
            }
        default:
            return state;
    }
}
export default adminReducer