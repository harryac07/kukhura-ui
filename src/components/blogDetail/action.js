import { FETCH_BLOG_DETAIL, CREATE_BLOG_POST_COMMENT, CREATE_POST_COMMENT_REPLY } from './constant'

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
        data: {
            data,
            type
        }
    }
}

export const createCommentReply = (data, postId, type = "blog") => {
    return {
        type: CREATE_POST_COMMENT_REPLY,
        data: {
            postId,
            data,
            type
        }
    }
}