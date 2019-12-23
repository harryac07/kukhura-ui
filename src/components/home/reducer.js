import { TEST_SUCCEED, TEST_REQUEST, GET_RECENT_POSTS_SUCCEED } from './constant'

const initialState = {
  test: '',
  loading: false,
  recentPosts: []
}
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case TEST_SUCCEED:
      return {
        ...state,
        test: action.payload,
        loading: false
      }
    case GET_RECENT_POSTS_SUCCEED:
      return {
        ...state,
        recentPosts: action.payload
      }
    default:
      return state;
  }
}
export default homeReducer