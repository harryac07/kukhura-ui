import { FETCH_BLOG_LIST, SET_BLOG_END_PAGINATION } from './constant'

export const fetchBlogList = (pageOffsetEnd = 4) => {
  return {
    type: FETCH_BLOG_LIST,
    pageOffsetEnd
  }
}