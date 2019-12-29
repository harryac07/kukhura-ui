import { FETCH_BLOG_LIST, FETCH_BLOG_LIST_SUCCEED, SET_BLOG_END_PAGINATION } from './constant'

import { orderBy } from 'lodash'
import moment from 'moment'

const initialState = {
    blogList: [],
    loading: false,
    heroBlogPost: [], // single most recent post
    blogPaginationEndOffset: 4 // bring max 4 posts on first load
}
const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BLOG_LIST:
            return {
                ...state,
                loading: true
            }
        case FETCH_BLOG_LIST_SUCCEED:
            const mostRecentPost = action.payload.filter(each => each.hero_post).sort(
                (a, b) => moment(b.created).format('YYYYMMDDHHmmss') - moment(a.created).format('YYYYMMDDHHmmss')
            )
            return {
                ...state,
                loading: false,
                blogList: action.payload.filter(each => !each.hero_post),
                blogPaginationEndOffset: action.paginationOffset,
                heroBlogPost: mostRecentPost[0]
            }
        default:
            return state;
    }
}
export default blogReducer