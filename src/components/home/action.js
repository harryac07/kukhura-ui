import { TEST_REQUEST, TEST_SUCCEED } from './constant'

export const test = () => {
  return {
    type: TEST_REQUEST
  }
}
export const testSuccess = (data) => {
  return {
    type: TEST_SUCCEED,
    payload: data
  }
}