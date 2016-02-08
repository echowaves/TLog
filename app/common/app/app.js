import React, { Component } from 'react-native'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import { Provider } from 'react-redux/native'

import AppRouter from './app__router.js'
import * as reducers from '../reducers';

let createStoreWithMiddleware
let reducer = combineReducers(reducers)
let logger = createLogger()

if (process.env.NODE_ENV == 'production'){
  createStoreWithMiddleware = applyMiddleware(
    thunk,
    promiseMiddleware,
  )(createStore)
} else {
  createStoreWithMiddleware = applyMiddleware(
    thunk,
    promiseMiddleware,
    logger
  )(createStore)
}

let store = createStoreWithMiddleware(reducer)

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => (<AppRouter />)}
      </Provider>
    )
  }
}
