import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import axios from "axios"
import { take } from "lodash"

import {
  TEST_SUCCEED,
  TEST_FAILED,
  TEST_REQUEST,

  GET_RECENT_POSTS,
  GET_RECENT_POSTS_SUCCEED,
  GET_RECENT_POSTS_FAILED
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

const getRecentPosts = (rowCount) => {
  const fakeData = [
    {
      id: '1',
      title: 'ULUM MOLESTIE LACUS AENEAN NOMY HENDRERIT MAURIS PHASELLUS PORTA FUSCE SUSCIPIT',
      created_on: '2019-11-27 00:00:00',
      post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris.',
      post_image_url: 'https://dummyimage.com/250x250/cccccc/000.jpg',
      post_author: 'Hari Ac'
    }, {
      id: '2',
      title: 'ULUM MOLESTIE LACUS AENEAN NOMY HENDRERIT MAURIS PHASELLUS PORTA FUSCE SUSCIPIT',
      created_on: '2019-11-26 00:00:00',
      post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris.',
      post_image_url: 'https://dummyimage.com/250x250/cccccc/000.jpg',
      post_author: 'Hari Keto'
    }, {
      id: '3',
      title: 'ULUM MOLESTIE LACUS AENEAN NOMY HENDRERIT MAURIS PHASELLUS PORTA FUSCE SUSCIPIT',
      created_on: '2019-11-26 00:00:00',
      post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris.',
      post_image_url: 'https://dummyimage.com/250x250/cccccc/000.jpg',
      post_author: 'Hurriee Bhaii'
    }, {
      id: '4',
      title: 'ULUM MOLESTIE LACUS AENEAN NOMY HENDRERIT MAURIS PHASELLUS PORTA FUSCE SUSCIPIT',
      created_on: '2019-11-26 00:00:00',
      post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris.',
      post_image_url: 'https://dummyimage.com/250x250/cccccc/000.jpg',
      post_author: 'Hari Adhikari'
    },
  ];
  return take(fakeData, rowCount);
};
export function* getRecentPostsSaga(action) {
  try {
    const data = yield call(getRecentPosts, action.rowCount);
    yield put({
      type: GET_RECENT_POSTS_SUCCEED,
      payload: data
    });
  } catch (error) {
    yield put({
      type: GET_RECENT_POSTS_FAILED,
      error: 'Something went wrong!'
    });
  }
}

export const homeSaga = [
  takeEvery(TEST_REQUEST, fetchTestDataSaga),
  takeEvery(GET_RECENT_POSTS, getRecentPostsSaga),
];
