import {
    CATEGORIES_CHANGE,
    CATEGORIES_REQUEST,
    CATEGORIES_SUCCES,
    CATEGORIES_FAILURE,
} from './actionTypes'

export const categoriesChange = (category: string) => ({
    type: CATEGORIES_CHANGE, payload: {category}
});
export const categoriesRequest = () => ({
    type: CATEGORIES_REQUEST
});
export const categoriesSucces = (items:any) => ({
    type: CATEGORIES_SUCCES, payload: {items}
});
export const categoriesFailure = (error:any) => ({
    type: CATEGORIES_FAILURE, payload: {error}
});
