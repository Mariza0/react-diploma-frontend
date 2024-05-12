import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
} from '../actions/actionTypes'

const initialState = { id: '', loading: false, error: null, item: {}, };

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return { ...state, loading: true, id: action.payload.id}
        case PRODUCT_FAILURE:
            const { error } = action.payload;
            return { ...state, loading: false, error };
        case PRODUCT_SUCCESS:
            const { item } = action.payload;
            return { ...state, item, loading: false, error: null };
        default:
            return state;
    }
};
