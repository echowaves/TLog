import _ from 'lodash'
import moment from 'moment'
import Config from '../config'
import { AsyncStorage } from 'react-native'
import * as Api from '../../common/api'

/*
 * GENERAL
 */

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export function toggleSidebar(isOpen) {
  return {
    type: TOGGLE_SIDEBAR,
    payload: {
      isOpen
    }
  }
}

/*
 * AUTH
 */

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const AUTHENTICATE = 'AUTHENTICATE'

const AUTH_TOKEN_KEY = 'authToken';

export function login(email, password) {
  return function(dispatch) {
    return({
    type: LOGIN,
    payload: Api.login(email, password).then(({jwt}) => {
      dispatch(authenticate(jwt))
      return Promise.resolve({ token: jwt })
    })
  })}
}

export function restoreSession() {
  return dispatch => (
    AsyncStorage.getItem(AUTH_TOKEN_KEY).then((token) => {
      dispatch(authenticate(token))
    })
  )
}

export function authenticate(token) {
  return {
    type: AUTHENTICATE,
    payload: Api.authenticate(token).then((json) => {

      if (Config.auth.restorable) {
        AsyncStorage.setItem(AUTH_TOKEN_KEY, token).then(() =>{
          AsyncStorage.getItem(AUTH_TOKEN_KEY)
        })
      }

      return Promise.resolve({
        ...json,
        token: token,
      })
    }).then((authPayload) => {
      return Api.fetchAccount({ token }, authPayload.customer.currentAccountId).then((json) => {
        return Promise.resolve({
          ...authPayload,
          currentAccount: json.customerAccount,
        })
      })
    })
  }
}

export function logout() {
  return {
    type: LOGOUT,
    payload: AsyncStorage.removeItem(AUTH_TOKEN_KEY),
  }
}


/*
 * FAQs
 */
export const LOAD_FAQS = 'LOAD_FAQS'


export function loadFaqs({auth, viewer}) {
  return {
    type: LOAD_FAQS,
    payload: Api.fetchFaqs(auth)
  }
}



/*
 * NOTIFICATIONS
 */

export const ADD_REQUEST_NOTIFICATION = 'ADD_REQUEST_NOTIFICATION'
export const READ_REQUEST_NOTIFICATION = 'READ_REQUEST_NOTIFICATION'

export function addRequestNotification(id, isActive) {
  return {
    type: ADD_REQUEST_NOTIFICATION,
    payload: {
      id,
      isActive
    }
  }
}

export function readRequestNotification(id) {
  return {
    type: READ_REQUEST_NOTIFICATION,
    payload: {
      id
    }
  }
}

/*
 * NETWORKING
 */

export const BEGIN_NETWORK_REQUEST = 'BEGIN_NETWORK_REQUEST'
export const END_NETWORK_REQUEST = 'END_NETWORK_REQUEST'

export function beginNetworkRequest(name, id) {
  return {
    type: BEGIN_NETWORK_REQUEST,
    payload: { id, name }
  }
}

export function endNetworkRequest(name, id) {
  return {
    type: END_NETWORK_REQUEST,
    payload: { id, name }
  }
}


/*
 * HELPERS
 */

function dispatchNetworking(promisedAction, name, id = '*') {
  return (dispatch) => {
    dispatch(beginNetworkRequest(name, id))

    dispatch(promisedAction).then(
      () => dispatch(endNetworkRequest(name, id)),
      () => dispatch(endNetworkRequest(name, id))
    )
  }
}

function withCallbacks(promise, cb = {}) {
  const { onSuccess, onError } = cb

  return promise.then(
    (data) => {
      if (typeof onSuccess === 'function') {
        onSuccess(data)
      }
      return Promise.resolve(data)
    },
    (data) => {
      if (typeof onError === 'function') {
        onError(data)
      }
      return Promise.reject(data)
    }
  )
}
