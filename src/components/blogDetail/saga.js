import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import axios from "axios"
import { take } from "lodash"
import { API_URL } from 'env'

import {
    FETCH_BLOG_DETAIL_SUCCEED,
    FETCH_BLOG_DETAIL_FAILED,
    FETCH_BLOG_DETAIL
} from "./constant"

const fetchBlogById = ({ type, id }) => {
    const postTypeUrl = type === 'product'
        ? 'products'
        : 'blogposts'
    return axios
        .get(`${API_URL}/${postTypeUrl}/${id}/`)
        .then(response => {
            return response.data
        });
};
export function* fetchBlogByIdSaga(action) {
    try {
        const data = yield call(fetchBlogById, action.data);
        yield put({
            type: FETCH_BLOG_DETAIL_SUCCEED,
            payload: data
        });
    } catch (error) {
        yield put({
            type: FETCH_BLOG_DETAIL_FAILED,
            error: 'Something went wrong!'
        });
    }
}

// export default function* homeSaga() {
//   yield all([
//     yield takeEvery(TEST_REQUEST, fetchBlogByIdSaga)
//   ]);
// }
export const blogDetailSaga = [
    takeEvery(FETCH_BLOG_DETAIL, fetchBlogByIdSaga)
];
