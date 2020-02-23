import { FETCH_BLOG_DETAIL, CREATE_BLOG_POST_COMMENT } from './constant'

export const fetchBlogDetail = (id, type = "blog") => {
    return {
        type: FETCH_BLOG_DETAIL,
        data: {
            id,
            type
        }
    }
}
export const createPostComment = (data, type = "blog") => {
    return {
        type: CREATE_BLOG_POST_COMMENT,
        data : {
            data,
            type
        }
    }
}