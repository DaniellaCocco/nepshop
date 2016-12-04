import { ADD_TO_CART } from '../constants'

const initialState = {
  cart: [],
  total_cash: 0,
  total_number: 0
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [ ...state.cart, action.id ],
        total_number: state.cart.length
      }
    default:
      return state
  }
}

export default shopReducer
