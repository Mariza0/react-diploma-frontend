import { CATEGORIES_CHANGE, CATEGORIES_REQUEST, CATEGORIES_FAILURE, CATEGORIES_SUCCES } from "../actions/actionTypes";

const initialState = { items: [], category: 0, loading: false, error: null, search: '' };

export default function categoriesReducer(state = initialState, action) {
    switch(action.type) {
        case CATEGORIES_REQUEST:
            return {...state, loading: true, }
        case CATEGORIES_SUCCES:
            if (!action.payload.items) {
                return {...state, loading: false, }
            }
            return {...state, items: action.payload.items, loading: false, }
        case CATEGORIES_FAILURE:
            return { ...state, loading: false, error: action.payload.error.message, }
        case CATEGORIES_CHANGE:
            return { ...state, category: action.payload.category };
        default: return state
    }
};
