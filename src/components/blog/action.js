import { FETCH_BLOG_LIST, SET_BLOG_END_PAGINATION } from './constant'

// blogDetail constant
import { FETCH_BLOG_DETAIL_SUCCEED } from '../blogDetail/constant'


export const fetchBlogList = (pageOffsetEnd = 4) => {
    return {
        type: FETCH_BLOG_LIST,
        pageOffsetEnd
    }
}

/* Update reducer in blogDetail view */
export const addSelectedBlogDetail = (data = []) => {
    return {
        type: FETCH_BLOG_DETAIL_SUCCEED,
        payload: data
    }
}