import {
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAILURE,
} from './actionTypes'

export function productRequest(id: any) {
    return { type: PRODUCT_REQUEST, payload: { id } }
}

export function productSuccess(item: any) {
    return { type: PRODUCT_SUCCESS, payload: { item } }
}

export function productFailure(error: string) {
    return { type: PRODUCT_FAILURE, payload: { error } }
}
