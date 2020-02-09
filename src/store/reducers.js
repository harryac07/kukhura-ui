// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import homeReducer from '../components/home/reducer';
import blogReducer from '../components/blog/reducer'
import blogDetailReducer from '../components/blogDetail/reducer'
import productReducer from '../components/products/reducer'
import loginReducer from '../components/login/reducer'
import adminReducer from '../components/admin/reducer'

export default (history) => combineReducers({
    router: connectRouter(history),
    home: homeReducer,
    blog: blogReducer,
    blogDetail: blogDetailReducer,
    product: productReducer,
    login: loginReducer,
    admin: adminReducer,
})