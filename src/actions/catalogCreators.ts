import {
    CATALOG_REQUEST,
    CATALOG_SUCCES,
    CATALOG_FAILURE,
    CATALOG_CATEGORIES_CHANGE,
} from './actionTypes'

export const catalogRequest = () => ({
    type: CATALOG_REQUEST,
});
export const catalogSucces = (items:any) => ({
    type: CATALOG_SUCCES, payload: {items}
});
export const catalogFailure = (error:any) => ({
    type: CATALOG_FAILURE, payload: {error}
});

export const catalogCategoriesChange = (category:any) => ({
    type: CATALOG_CATEGORIES_CHANGE, payload: {category}
});
