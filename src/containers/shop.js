import React, { Component } from 'react'

export default class Shop extends Component {
  render() {
    return (
      <div className="shop">
        <div className="menu">
          <div className="item">Products</div>
          <div className="item">Cart</div>
        </div>
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
