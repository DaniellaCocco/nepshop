import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Menu } from 'semantic-ui-react'

class MenuContainer extends Component {

  render() {

    let amount_of_items = this.props.state.cart.length

    return (
      <Menu attached borderless>
        <Menu.Item name='Nepshop'>
          Nepshop
        </Menu.Item>
        <Menu.Menu position='right' icon>
          <Menu.Item name='indicator'>
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
