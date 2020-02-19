import { FETCH_POST_CATEGORIES, CREATE_POST } from './constant'

export const fetchPostCategories = () => {
    return {
        type: FETCH_POST_CATEGORIES
    }
}
export const createPost = (data, postType = "blogpost") => {
    console.log('action, createPost',)
    return {
        type: CREATE_POST,
        data: data,
        postType: postType
    }
}