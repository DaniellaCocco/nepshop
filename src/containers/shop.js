import React, { Component } from 'react'

const e = React.createElement

export default class Shop extends Component {
  render() {
    return (
      e('p',
        null,
        'Hello World!'
      )
    )
  }
}
