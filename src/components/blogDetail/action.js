import { FETCH_BLOG_DETAIL } from './constant'

export const fetchBlogDetail = (postId) => {
  return {
    type: FETCH_BLOG_DETAIL,
    data: postId
  }
}