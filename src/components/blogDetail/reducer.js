import {
	FETCH_BLOG_DETAIL,
	FETCH_BLOG_DETAIL_SUCCEED,
	CREATE_BLOG_POST_COMMENT,
	CREATE_BLOG_POST_COMMENT_SUCCEED,
	CREATE_BLOG_POST_COMMENT_FAILED
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
		default:
			return state;
	}
}
export default blogDetailReducer