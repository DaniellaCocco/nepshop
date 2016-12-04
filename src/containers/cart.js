import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Item } from 'semantic-ui-react'

class CartItems extends Component {

  render() {

    let cart_items = this.props.state.cart
    const hasItems = cart_items.length > 0
    const cartContent = hasItems ? (
      cart_items.map(product =>
        <Item key={_.uniqueId('cart_product_')}>
          <Item.Content>
            <Item.Header>{product.title}</Item.Header>
            <Item.Meta>
              <span>{product.price}</span>
            </Item.Meta>
          </Item.Content>
        </Item>
      )
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
    state
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
