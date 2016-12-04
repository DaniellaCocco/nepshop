import { ADD_TO_CART } from '../constants'

const initialState = {
  cart: []
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [ ...state.cart, action.id ]
      }
    default:
      return state
  }
}

export default shopReducer
