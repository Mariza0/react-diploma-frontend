import {
    FETCH_TOP_SALES,
    TOPSALES_REQUEST,
    TOPSALES_SUCCES,
    TOPSALES_FAILURE,
} from './actionTypes'

export const topSalesRequest = () => ({
    type: TOPSALES_REQUEST,
});
export const topSalesSucces = (items:any) => ({
    type: TOPSALES_SUCCES, payload: {items}
});
export const topSalesFailure = (error:any) => ({
    type: TOPSALES_FAILURE, payload: {error}
});

export function fetchTopSalesSuccess(topSales: any) {
    return { type: FETCH_TOP_SALES, payload: { topSales } }
}