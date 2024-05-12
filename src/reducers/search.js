import {
    SEARCH_FAILURE,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_HEADER,

} from '../actions/actionTypes'

const initialState = { items: [], loading: false, error: null, category: 0, search: '', countOffset: 0 };

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_REQUEST:
            return { ...state, loading: true, search: action.payload.search}
        case SEARCH_FAILURE:
            const { error } = action.payload;
            return { ...state, loading: false, error };
        case SEARCH_SUCCESS:
            const { items } = action.payload;
            return { ...state, items, loading: false, error: null };
        case SEARCH_HEADER:
            console.log(action.payload.search ,'action.payload.search ')
                return { ...state, search: action.payload.search  };
        default:
            return state;
    }
};
