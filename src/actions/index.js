import * as types from '../constants'

// Actions creators

export const addToCart = id => ({
  type: types.ADD_TO_CART,
  id
})
