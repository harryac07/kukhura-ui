import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import axios from "axios"
import { API_URL } from 'env'

import {
    FETCH_POST_CATEGORIES,
    FETCH_POST_CATEGORIES_SUCCEED,
    FETCH_POST_CATEGORIES_FAILED,

    CREATE_POST,
    CREATE_POST_SUCCEED,
    CREATE_POST_FAILED
} from "./constant"

/* fetchPostCategories */
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

/* createPost */
const createPost = ({ data, postType }) => {
    console.log(postType, data)
    let postUrl = '';
    if (postType === 'blog') {
        postUrl = `${API_URL}/blogposts/`;
    } else {
        postUrl = `${API_URL}/products/`;
    }
    return axios
        .post(postUrl, data, {
            headers: {
                "Authorization": `Token ${localStorage.getItem('auth_token')}`,
                "Content-type": "multipart/form-data",
            },
        })
        .then(response => {
            console.log('blog post created')
            return response.data
        });
};
export function* createPostSaga(action) {
    try {
        const data = yield call(createPost, action);
        yield put({
            type: CREATE_POST_SUCCEED,
            payload: data
        });
    } catch (error) {
        console.log(error.response.data)
        yield put({
            type: CREATE_POST_FAILED,
            error: 'Something went wrong!'
        });
    }
}

export const adminSaga = [
    takeEvery(FETCH_POST_CATEGORIES, fetchPostCategoriesSaga),
    takeEvery(CREATE_POST, createPostSaga),
];
