import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from "../constants/productConstant"
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                loding: true,
                products: []
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                loding: false,
                products: action.payload
            }
        case PRODUCT_LIST_FAIL:
            return {
                loding: false,
                error: action.payload
            }
        default:
            return state;
    }
};
export const productDetailReducer = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loding: true,
                product: []
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loding: false,
                product: action.payload
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                loding: false,
                error: action.payload
            }
        default:
            return state;
    }
};