import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios"
import { API_URL } from 'env'

import {
  FETCH_BLOG_DETAIL_SUCCEED,
  FETCH_BLOG_DETAIL_FAILED,
  FETCH_BLOG_DETAIL,
  CREATE_BLOG_POST_COMMENT,
  CREATE_BLOG_POST_COMMENT_SUCCEED,
  CREATE_BLOG_POST_COMMENT_FAILED
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

/* create comment */
const createBlogPostComment = ({ data }) => {
  return axios
    .post(`${API_URL}/comments/`, data)
    .then(response => {
      return response.data
    });
};
export function* createBlogPostCommentSaga(action) {
  try {
    const data = yield call(createBlogPostComment, action.data);
    yield put({
      type: CREATE_BLOG_POST_COMMENT_SUCCEED,
      payload: data
    });
    /* fetch blogpost again to include comment */
    yield put({
      type: FETCH_BLOG_DETAIL,
      data: {
        id: action.data.data.blogpost,
        type: action.data.type
      }
    });
  } catch (error) {
    yield put({
      type: CREATE_BLOG_POST_COMMENT_FAILED,
      error: 'Something went wrong!'
    });
  }
}

export const blogDetailSaga = [
  takeEvery(FETCH_BLOG_DETAIL, fetchBlogByIdSaga),
  takeEvery(CREATE_BLOG_POST_COMMENT, createBlogPostCommentSaga),
];
