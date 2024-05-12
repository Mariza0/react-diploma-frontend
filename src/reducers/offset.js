import { OFFSET_CATEGORIES_CHANGE, OFFSET_REQUEST, OFFSET_FAILURE, OFFSET_SUCCES, OFFSET_SEARCH_CHANGE } from "../actions/actionTypes";

const initialState = { offset: [], category: 0, countOffset: 6, loading: false, error: null };

export default function offsetReducer(state = initialState, action) {
    switch(action.type) {
        case OFFSET_REQUEST:
            return {...state, countOffset: action.payload.countOffset + 6, category: action.payload.category, loading: true, }
        case OFFSET_SUCCES:
          
            const { offset } = action.payload;

            const oldOffset = state.offset;

            return { ...state, offset: action.payload.offset, loading: true, error: null }
        case OFFSET_FAILURE:
            return { ...state, loading: false, error: action.payload.error, }
        case OFFSET_CATEGORIES_CHANGE:
            return { ...state, offset: [], countOffset: 6, category: action.payload.category, };
        case OFFSET_SEARCH_CHANGE:
                return { ...state, offset: [], countOffset: 6, loading: false, error: null }
        default: return state
    }
};
