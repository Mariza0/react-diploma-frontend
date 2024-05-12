import {
    SEARCH_SUCCESS,
    SEARCH_REQUEST,
    SEARCH_FAILURE,
    SEARCH_CATEGORY_CHANGE,
    SEARCH_HEADER
} from './actionTypes'

export function searchRequest(category: string, countOffset: any, search: string ) {
    return { type: SEARCH_REQUEST, payload: { category, countOffset, search } }
}

export function searchSuccess(items: any) {
    return { type: SEARCH_SUCCESS, payload: { items } }
}

export function searchFailure(error: string) {
    return { type: SEARCH_FAILURE, payload: { error } }
}

export function searchCategoryChange(category: string) {
    return { type: SEARCH_CATEGORY_CHANGE, payload: { category } }
}

export function searchHeader(search: string) {
    return { type: SEARCH_HEADER, payload: { search } }
}
