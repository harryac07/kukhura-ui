import { all } from "redux-saga/effects";
import { homeSaga } from '../components/home/saga';
import { blogSaga } from '../components/blog/saga';
import { blogDetailSaga } from '../components/blogDetail/saga';
import { loginSaga } from '../components/login/saga';
import { productSaga } from '../components/products/saga';
import { adminSaga } from '../components/admin/saga';

export default function* rootSaga() {
    yield all([
        ...homeSaga,
        ...blogSaga,
        ...blogDetailSaga,
        ...loginSaga,
        ...productSaga,
        ...adminSaga,
    ])
}