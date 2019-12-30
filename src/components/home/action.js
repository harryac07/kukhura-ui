import { TEST_REQUEST, TEST_SUCCEED, GET_RECENT_POSTS } from './constant'

export const test = () => {
    return {
        type: TEST_REQUEST
    }
}
export const testSuccess = (data) => {
    return {
        type: TEST_SUCCEED,
        payload: data
    }
}
export const getRecentPosts = (count = 3) => {
    return {
        type: GET_RECENT_POSTS,
        rowCount: count
    }
}