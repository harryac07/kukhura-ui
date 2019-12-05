import { FETCH_BLOG_LIST, FETCH_BLOG_LIST_SUCCEED, SET_BLOG_END_PAGINATION } from './constant'

const initialState = {
  blogList: [],
  loading: false,
  blogPaginationEndOffset: 4 // bring max 4 posts on first load
}
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOG_LIST:
      return {
        ...state,
        loading: true
      }
    case FETCH_BLOG_LIST_SUCCEED:
      return {
        ...state,
        loading: false,
        blogList: action.payload,
        blogPaginationEndOffset: action.paginationOffset
      }
    default:
      return state;
  }
}
export default blogReducer