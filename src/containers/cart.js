import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCartProducts,
  getTotalCash,
  getTotalNumber } from '../reducers/index.js'
import { Item } from 'semantic-ui-react'

let cart_items = []

class CartItems extends Component {

  render() {

    console.log(this.props)

    const hasItems = cart_items.length > 0
    const cartContent = hasItems ? (
      <Item.Group items={cart_items} />
    ) : (
      <p>Your cart is empty.</p>
    )

    return (
      <div>
        {cartContent}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    xyz: {}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    abc: {}
  }
}

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItems)

export default Cart
