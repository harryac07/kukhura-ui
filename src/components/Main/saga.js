import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import axios from "axios"
import { take } from "lodash"
import { API_URL } from 'env'

import {
    FETCH_USER,
    FETCH_USER_SUCCEED,
    FETCH_USER_FAILED
} from "./constant"

const fetchCurrentUser = () => {
    return axios
        .get(`${API_URL}/users/`)
        .then(response => {
            return response.data
        });
};
export function* fetchCurrentUserSaga(action) {
    try {
        const data = yield call(fetchCurrentUser);
        console.log('users ', data)
        yield put({
            type: FETCH_USER_SUCCEED,
            payload: data
        });
    } catch (error) {
        yield put({
            type: FETCH_USER_FAILED,
            error: 'Something went wrong!'
        });
    }
}

export const appSaga = [
    takeEvery(FETCH_USER, fetchCurrentUserSaga),
];