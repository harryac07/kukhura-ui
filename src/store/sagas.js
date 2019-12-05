import { all } from "redux-saga/effects";
import { homeSaga } from '../components/home/saga';
import { blogSaga } from '../components/blog/saga';

export default function* rootSaga() {
  yield all([
    ...homeSaga,
    ...blogSaga
  ])
}