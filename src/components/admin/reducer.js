import { FETCH_POST_CATEGORIES_SUCCEED } from './constant'

const initialState = {
    loading: false,
    postCategories: [],
}
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST_CATEGORIES_SUCCEED:
            return {
                ...state,
                postCategories: action.payload
            }
        default:
            return state;
    }
}
export default adminReducer