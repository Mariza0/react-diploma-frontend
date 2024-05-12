import { TOPSALES_FAILURE, TOPSALES_REQUEST, TOPSALES_SUCCES } from "../actions/actionTypes";

const initialState = { items: [], loading: false, error: null, search: '' };

export default function topSalesReducer(state = initialState, action) {
    switch(action.type) {
        case TOPSALES_REQUEST:
            return {...state, loading: true, }
        case TOPSALES_SUCCES:
            if (action.payload.items.length < 0) {
                return {...state, items: [], loading: false, }
            }
            return {...state, items: action.payload.items, loading: false, }
        case TOPSALES_FAILURE:
            return { ...state, loading: false, error: action.payload.error.message, }
        default: return state
    }
};
