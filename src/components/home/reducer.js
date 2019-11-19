import { TEST_SUCCEED, TEST_REQUEST } from './constant'

const initialState = {
  test: '',
  loading: false
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
    default:
      return state;
  }
}
export default homeReducer