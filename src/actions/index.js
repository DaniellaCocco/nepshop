import * as types from '../constants'

// Actions creators

export const addToCart = product => ({
  type: types.ADD_TO_CART,
  product
})
