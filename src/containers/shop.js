import React, { Component } from 'react'
import Products from '../components/products'
import { Header, Item, Menu } from 'semantic-ui-react'

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

class MainMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='products'
          active={activeItem === 'products'}
          onClick={this.handleItemClick}
        >
          Products
        </Menu.Item>
        <Menu.Item
          name='cart'
          active={activeItem === 'cart'}
          onClick={this.handleItemClick}
        >
          Cart
        </Menu.Item>
      </Menu>
    )
  }
}

class Shop extends Component {
  render() {
    return (
      <div className="shop">
        <MainMenu />
        <Header as='h2'>Products</Header>
        <Products />
        <Header as='h2'>Cart</Header>
        <Cart />
      </div>
    )
  }
}

export default Shop
