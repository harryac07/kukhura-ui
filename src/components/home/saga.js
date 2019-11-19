import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import axios from "axios"

import {
  TEST_SUCCEED,
  TEST_FAILED,
  TEST_REQUEST
} from "./constant"

const fetchTestData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/comments?postId=1`)
    .then(response => {
      return response.data
    });
};
export function* fetchTestDataSaga(action) {
  try {
    const data = yield call(fetchTestData);
    yield put({
      type: TEST_SUCCEED,
      payload: data
    });
  } catch (error) {
    yield put({
      type: TEST_FAILED,
      error: 'Something went wrong!'
    });
  }
}

// export default function* homeSaga() {
//   yield all([
//     yield takeEvery(TEST_REQUEST, fetchTestDataSaga)
//   ]);
// }
export const homeSaga = [
  takeEvery(TEST_REQUEST, fetchTestDataSaga)
];
