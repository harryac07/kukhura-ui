import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import axios from "axios"
import { take } from "lodash"

import {
  FETCH_BLOG_LIST_SUCCEED,
  FETCH_BLOG_LIST_FAILED,
  FETCH_BLOG_LIST
} from "./constant"

const fetchBlogList = ({ pageOffsetEnd }) => {
  const fakeData = [
    {
      id: '1',
      title: 'VESTIBULUM ANTE IPSUM PRIMIS',
      created_on: '2019-11-26 00:00:00',
      post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris.',
      post_image_url: 'https://dummyimage.com/250x250/cccccc/000.jpg',
      post_author: 'Hari Adhikari'
    }, {
      id: '2',
      title: 'VESTIBULUM ANTE IPSUM PRIMIS',
      created_on: '2019-11-26 00:00:00',
      post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris.',
      post_image_url: 'https://dummyimage.com/250x250/cccccc/000.jpg',
      post_author: 'Hari Adhikari'
    }, {
      id: '3',
      title: 'VESTIBULUM ANTE IPSUM PRIMIS',
      created_on: '2019-11-26 00:00:00',
      post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris.',
      post_image_url: 'https://dummyimage.com/250x250/cccccc/000.jpg',
      post_author: 'Hari Adhikari'
    }, {
      id: '4',
      title: 'VESTIBULUM ANTE IPSUM PRIMIS',
      created_on: '2019-11-26 00:00:00',
      post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris.',
      post_image_url: 'https://dummyimage.com/250x250/cccccc/000.jpg',
      post_author: 'Hari Adhikari'
    }, {
      id: '4',
      title: 'VESTIBULUM ANTE IPSUM PRIMIS',
      created_on: '2019-11-26 00:00:00',
      post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris.',
      post_image_url: 'https://dummyimage.com/250x250/cccccc/000.jpg',
      post_author: 'Hari Adhikari'
    }, {
      id: '6',
      title: 'VESTIBULUM ANTE IPSUM PRIMIS',
      created_on: '2019-11-26 00:00:00',
      post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris.',
      post_image_url: 'https://dummyimage.com/250x250/cccccc/000.jpg',
      post_author: 'Hari Adhikari'
    }, {
      id: '7',
      title: 'VESTIBULUM ANTE IPSUM PRIMIS',
      created_on: '2019-11-26 00:00:00',
      post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris.',
      post_image_url: 'https://dummyimage.com/250x250/cccccc/000.jpg',
      post_author: 'Hari Adhikari'
    }, {
      id: '8',
      title: 'VESTIBULUM ANTE IPSUM PRIMIS',
      created_on: '2019-11-26 00:00:00',
      post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris.',
      post_image_url: 'https://dummyimage.com/250x250/cccccc/000.jpg',
      post_author: 'Hari Adhikari'
    }, {
      id: '9',
      title: 'VESTIBULUM ANTE IPSUM PRIMIS',
      created_on: '2019-11-26 00:00:00',
      post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris.',
      post_image_url: 'https://dummyimage.com/250x250/cccccc/000.jpg',
      post_author: 'Hari Adhikari'
    },
  ];
  return take(fakeData, pageOffsetEnd);
  // return axios
  //   .get(`https://jsonplaceholder.typicode.com/comments?postId=1`)
  //   .then(response => {
  //     return response.data
  //   });
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
