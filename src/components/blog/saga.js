import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import axios from "axios"
import { take } from "lodash"
import { API_URL } from 'env'

import {
    FETCH_BLOG_LIST_SUCCEED,
    FETCH_BLOG_LIST_FAILED,
    FETCH_BLOG_LIST
} from "./constant"

/* Root API end point */

const fetchBlogList = ({ pageOffsetEnd }) => {
    return axios
        .get(`${API_URL}/blogposts/?category=blog`)
        .then(response => {
            return response.data
        });
};
export function* fetchBlogListSaga(action) {
    try {
        const data = yield call(fetchBlogList, action);
        yield put({
            type: FETCH_BLOG_LIST_SUCCEED,
            payload: data,
            paginationOffset: action.pageOffsetEnd
        });
    } catch (error) {
        yield put({
            type: FETCH_BLOG_LIST_FAILED,
            error: 'Something went wrong!'
        });
    }
}

// export default function* homeSaga() {
//   yield all([
//     yield takeEvery(TEST_REQUEST, fetchBlogListSaga)
//   ]);
// }
export const blogSaga = [
    takeEvery(FETCH_BLOG_LIST, fetchBlogListSaga)
];
