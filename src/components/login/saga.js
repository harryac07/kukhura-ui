import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import { createBrowserHistory } from 'history';
import axios from "axios"
import { take } from "lodash"
import { API_URL } from 'env'

import {
    FETCH_USER,
    FETCH_USER_FAILED,
    FETCH_USER_SUCCEED,
    LOGIN,
    LOGIN_SUCCEED,
    LOGIN_FAILED,
    CHECK_AUTHENTICATION,
    CHECK_AUTHENTICATION_SUCCEED,
    CHECK_AUTHENTICATION_FAILED
} from "./constant"

/* Root API route */

const login = ({ username, password }) => {
    return axios
        .post(`${API_URL}/auth/login/`, {
            username,
            password
        })
        .then(response => {
            return response.data
        });
};
export function* userLoginSaga(action) {
    try {
        const data = yield call(login, action.data);
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


const checkIfAuthenticated = (token = "") => {
    return axios
        .get(`${API_URL}/auth/isauthenticated/?token=${token}`)
        .then(response => {
            console.log(response.status, response.data);
            return response.data
        });
};
export function* checkIfAuthenticatedSaga(action) {
    try {
        const data = yield call(checkIfAuthenticated, action.data);
        console.log(data)
        if (data === 'Not logged in!') {
            localStorage.clear();
        } else {
            yield put({
                type: CHECK_AUTHENTICATION_SUCCEED,
            });
        }
    } catch (error) {
        console.log(error.response)
        localStorage.clear();
        yield put({
            type: CHECK_AUTHENTICATION_FAILED,
            error: 'User not logged in.'
        });
    }
}

export const loginSaga = [
    takeEvery(LOGIN, userLoginSaga),
    takeEvery(CHECK_AUTHENTICATION, checkIfAuthenticatedSaga),
];
