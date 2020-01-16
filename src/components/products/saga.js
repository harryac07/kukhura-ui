import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import axios from "axios"
import { take } from "lodash"
import { API_URL } from 'env'

import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCEED,
    GET_PRODUCTS_FAILED
} from "./constant"

const fetchProducts = () => {
    return axios
        .get(`${API_URL}/products/`)
        .then(response => {
            return response.data
        });
};
export function* fetchProductsSaga(action) {
    try {
        const data = yield call(fetchProducts);
        console.log('products ', data)
        yield put({
            type: GET_PRODUCTS_SUCCEED,
            payload: data
        });
    } catch (error) {
        yield put({
            type: GET_PRODUCTS_FAILED,
            error: 'Something went wrong!'
        });
    }
}

export const productSaga = [
    takeEvery(GET_PRODUCTS, fetchProductsSaga),
];
