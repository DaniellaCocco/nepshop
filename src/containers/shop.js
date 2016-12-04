import React, { Component } from 'react'
import MainMenu from '../components/main_menu'
import Products from '../components/products'
import Cart from '../containers/cart'
import { Header } from 'semantic-ui-react'

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
