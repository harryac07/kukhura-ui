import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import { createBrowserHistory } from 'history';
import axios from "axios"
import { take } from "lodash"

import {
    FETCH_USER,
    FETCH_USER_FAILED,
    FETCH_USER_SUCCEED,
    LOGIN,
    LOGIN_SUCCEED,
    LOGIN_FAILED
} from "./constant"

/* Root API route */
const API_URL = `http://localhost:8000/api`

const authenticateUser = ({ username, password }) => {
    return axios
        .post(`${API_URL}/authenticate/`, {
            username,
            password
        })
        .then(response => {
            return response.data
        });
};
export function* authenticateUserSaga(action) {
    try {
        const data = yield call(authenticateUser, action.data);

        localStorage.setItem('auth_token', data.token);
        localStorage.setItem('user_id', data.user_id);
        localStorage.setItem('email', data.email);
        localStorage.setItem('username', data.username);
        localStorage.setItem('group', data.group.toString());

        yield put({
            type: LOGIN_SUCCEED,
        });
    } catch (error) {
        yield put({
            type: LOGIN_FAILED,
            error: 'Something went wrong! Please check your credential.'
        });
    }
}

export const loginSaga = [
    takeEvery(LOGIN, authenticateUserSaga),
];
