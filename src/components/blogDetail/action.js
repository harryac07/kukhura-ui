import { FETCH_BLOG_DETAIL } from './constant'

export const fetchBlogDetail = (id, type="blog") => {
  return {
    type: FETCH_BLOG_DETAIL,
    data: {
        id,
        type
    }
  }
}