import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import shopReducer from './reducers'
import Shop from './containers/shop'

let store = createStore(shopReducer)
console.log(store.getState())
const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>,
  root
)
