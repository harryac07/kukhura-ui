import { FETCH_BLOG_DETAIL, FETCH_BLOG_DETAIL_SUCCEED } from './constant'

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
    default:
      return state;
  }
}
export default blogDetailReducer