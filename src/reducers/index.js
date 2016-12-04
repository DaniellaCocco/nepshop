import { ADD_TO_CART } from '../constants'

const initialState = {
  cart: []
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [ ...state.cart, action.product ]
      }
    default:
      return state
  }
}

export default shopReducer
