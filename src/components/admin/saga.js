import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import axios from "axios"
import { API_URL } from 'env'

import {
    FETCH_POST_CATEGORIES,
    FETCH_POST_CATEGORIES_SUCCEED,
    FETCH_POST_CATEGORIES_FAILED
} from "./constant"

const fetchPostCategories = () => {
    return axios
        .get(`${API_URL}/categories/`)
        .then(response => {
            return response.data
        });
};
export function* fetchPostCategoriesSaga(action) {
    try {
        const data = yield call(fetchPostCategories);
        yield put({
            type: FETCH_POST_CATEGORIES_SUCCEED,
            payload: data
        });
    } catch (error) {
        yield put({
            type: FETCH_POST_CATEGORIES_FAILED,
            error: 'Something went wrong!'
        });
    }
}

export const adminSaga = [
    takeEvery(FETCH_POST_CATEGORIES, fetchPostCategoriesSaga),
];
