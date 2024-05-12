import {
    OFFSET_FAILURE,
    OFFSET_REQUEST,
    OFFSET_SUCCES,
    OFFSET_CATEGORIES_CHANGE,
    OFFSET_SEARCH_CHANGE
} from './actionTypes'

export const offsetRequest = (category: string, countOffset: any, search?: string) => ({
    type: OFFSET_REQUEST, payload: {category, countOffset, search}
});
export const offsetSucces = (offset:any) => ({
    type: OFFSET_SUCCES, payload: {offset}
});
export const offsetFailure = (error:any) => ({
    type: OFFSET_FAILURE, payload: {error}
});

export const offsetCategoriesChange = (category: string) => ({
    type: OFFSET_CATEGORIES_CHANGE, payload: {category}
});

export const offsetSearchChange = (search: string) => ({
    type: OFFSET_SEARCH_CHANGE, payload: {search}
});
