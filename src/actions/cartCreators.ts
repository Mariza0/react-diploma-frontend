import {
    CART_QUANTITY,
} from './actionTypes'

export function cartQuantity(totalQuantity: string) {
    return { type: CART_QUANTITY, payload: { totalQuantity } }
}
