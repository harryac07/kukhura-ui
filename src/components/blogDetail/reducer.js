import {
    FETCH_BLOG_DETAIL,
    FETCH_BLOG_DETAIL_SUCCEED,
    CREATE_BLOG_POST_COMMENT,
    CREATE_BLOG_POST_COMMENT_SUCCEED,
    CREATE_BLOG_POST_COMMENT_FAILED,
    CREATE_POST_COMMENT_REPLY,
    CREATE_POST_COMMENT_REPLY_SUCCEED,
    CREATE_POST_COMMENT_REPLY_FAILED
} from './constant'

const initialState = {
    blogDetail: [],
    loading: false,
}
const blogDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BLOG_DETAIL:
            return {
                ...state,
                loading: true
            }
        case FETCH_BLOG_DETAIL_SUCCEED:
            return {
                ...state,
                loading: false,
                blogDetail: action.payload
            }
        case CREATE_BLOG_POST_COMMENT:
            return {
                ...state,
                commentCreated: false
            }
        case CREATE_BLOG_POST_COMMENT_SUCCEED:
            return {
                ...state,
                commentCreated: true
            }
        case CREATE_BLOG_POST_COMMENT_FAILED:
            return {
                ...state,
                commentCreated: false
            }
        case CREATE_POST_COMMENT_REPLY:
            return {
                ...state,
                replyCreated: false
            }
        case CREATE_POST_COMMENT_REPLY_SUCCEED:
            return {
                ...state,
                replyCreated: true
            }
        case CREATE_POST_COMMENT_REPLY_FAILED:
            return {
                ...state,
                replyCreated: false
            }
        default:
            return state;
    }
}
export default blogDetailReducer