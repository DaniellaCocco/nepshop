import React from 'react'
import { connect } from 'react-redux'
import { Button, Item } from 'semantic-ui-react'
import { addToCart } from '../actions'

// Mock products here for simplicity's sake
const all_products = [
  {"id": 7, "title": "iPhone 7", "price": 700.00 },
  {"id": 6, "title": "iPhone 6", "price": 600.00 },
  {"id": 5, "title": "iPhone 5", "price": 500.00 },
  {"id": 4, "title": "iPhone 4", "price": 400.00 }
]

const ProductsList = ({addToCart}) => {

  const hasItems = all_products.length > 0
  const productsContent = hasItems ? (
    all_products.map(product =>
      <Item key={product.id}>
        <Item.Image src='http://semantic-ui.com/images/wireframe/image.png' />
        <Item.Content>
          <Item.Header>{product.title}</Item.Header>
          <Item.Meta>
            <span>{product.price}</span>
          </Item.Meta>
          <Item.Extra>
            <Button
              primary floated='right'
              onClick={() => addToCart(product.id)}>
              Buy
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  ) : (
    <p>No products in stock!</p>
  )

  return (
    <Item.Group divided>
      { productsContent }
    </Item.Group>
  )
}

const mapStateToProps = (state) => {
  return {
    xyz: {}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id))
    }
  }
}

const Products = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)

export default Products
