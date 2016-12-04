const initialState = {
  cart: [],
  total_number: 0,
  total_cash: 0
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default shopReducer

export const getCartProducts = state => []
export const getTotalNumber = state => 0
export const getTotalCash = state => 0
