import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Menu } from 'semantic-ui-react'

class MenuContainer extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    let amount_of_items = this.props.state.cart.length

    return (
      <Menu attached borderless>
        <Menu.Item
          name='Nepshop'
          onClick={this.handleItemClick}
        >
          Nepshop
        </Menu.Item>
        <Menu.Menu position='right' icon>
          <Menu.Item
            name='indicator'
            active={activeItem === 'indicator'}
            onClick={this.handleItemClick}>
            <Icon name='shopping bag' />
            { amount_of_items }
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const MainMenu = connect(
  mapStateToProps,
  null
)(MenuContainer)

export default MainMenu
