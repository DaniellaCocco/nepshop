import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Item } from 'semantic-ui-react'

let cart_items = []

class Cart extends Component {

  render() {

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

const mapStateToProps = (state) => ({
  cart: getCartProducts(state),
  total_number: getTotalNumber(state),
  total_cash: getTotalCash(state)
})

export default connect(mapStateToProps)(Cart)
