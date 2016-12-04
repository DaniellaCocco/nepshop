import React, { Component } from 'react'
import MainMenu from '../components/main_menu'
import Products from '../components/products'
import Cart from '../containers/cart'
import { Grid, Header } from 'semantic-ui-react'

class Shop extends Component {
  render() {
    return (
      <div className="shop">
        <MainMenu />
        <Grid padded>
          <Grid.Column>
            <Header as='h2'>Products</Header>
            <Products />
            <Header as='h2'>Cart</Header>
            <Cart />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Shop
