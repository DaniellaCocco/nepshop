import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

class MainMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu attached borderless>
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
        <Menu.Menu position='right' icon>
          <Menu.Item
            name='indicator'
            active={activeItem === 'indicator'}
            onClick={this.handleItemClick}>
            <Icon name='shopping bag' /> 0
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default MainMenu
