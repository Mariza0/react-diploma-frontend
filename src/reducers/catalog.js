import { CATALOG_FAILURE, CATALOG_REQUEST, CATALOG_SUCCES, CATALOG_CATEGORIES_CHANGE } from "../actions/actionTypes";

const initialState = { items: [], category: 0, loading: false, error: null, search: '' };

export default function catalogReducer(state = initialState, action) {
    switch(action.type) {
        case CATALOG_REQUEST:
            return {...state, loading: true, }
        case CATALOG_SUCCES:
            return {...state, items: action.payload.items || [], loading: false, }
        case CATALOG_FAILURE:
            return { ...state, loading: false, error: action.payload.error, }
        case CATALOG_CATEGORIES_CHANGE:
            return { ...state, category: action.payload.category };
        default: return state
    }
};
