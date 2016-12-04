import React from 'react'
import { Item } from 'semantic-ui-react'

const items = [
  {
    childKey: 0,
    image: 'http://semantic-ui.com/images/wireframe/image.png',
    header: 'iPhone 6',
    description: 'Description',
    meta: 'Metadata'
  },
  {
    childKey: 1,
    image: 'http://semantic-ui.com/images/wireframe/image.png',
    header: 'iPhone 7',
    description: 'Description',
    meta: 'Metadata'
  },
]

const Products = () => (
  <Item.Group items={items} />
)

export default Products;
