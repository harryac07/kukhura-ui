import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import axios from "axios"
import { take } from "lodash"

import {
  FETCH_BLOG_DETAIL_SUCCEED,
  FETCH_BLOG_DETAIL_FAILED,
  FETCH_BLOG_DETAIL
} from "./constant"

const fetchBlogById = (postId) => {
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
  return fakeData.filter(each => each.id === postId)
  // return axios
  //   .get(`https://jsonplaceholder.typicode.com/comments?postId=1`)
  //   .then(response => {
  //     return response.data
  //   });
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
