import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

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
        <div className="products">
          <div className="product">
            <p className="name">Fiat Panda</p>
            <p className="year">2006</p>
            <p className="color">Black</p>
          </div>
          <div className="product">
            <p className="name">Fiat 500</p>
            <p className="year">2010</p>
            <p className="color">Red</p>
          </div>
        </div>
        <div className="cart">
          <p>Your cart is empty.</p>
        </div>
      </div>
    )
  }
}

export default Shop
