import { GET_PRODUCTS, GET_PRODUCTS_SUCCEED } from './constant'

const initialState = {
    loading: false,
    hero_product: [],
    products: []
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCTS_SUCCEED:
            return {
                ...state,
                products: action.payload,
                hero_product : action.payload.filter(each=>each.hero_product),
                loading: false
            }
        default:
            return state;
    }
}
export default productReducer