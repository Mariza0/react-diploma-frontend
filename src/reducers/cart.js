import {
    CART_QUANTITY
  } from '../actions/actionTypes'
  
  const initialState = { totalQuantity: 0, };
  
  export default function cartReducer(state = initialState, action) {
      switch (action.type) {
          case CART_QUANTITY:
              return {...state, totalQuantity: action.payload.totalQuantity}
          default:
              return state;
      }
  };
