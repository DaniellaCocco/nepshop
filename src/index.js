import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger';
import shopReducer from './reducers'
import Shop from './containers/shop'

const logger = createLogger()
let store = createStore(shopReducer, applyMiddleware(logger))

const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>,
  root
)
