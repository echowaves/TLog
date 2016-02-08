import _ from 'lodash'
import { createReducer } from './reducers__utils.js'
import { BEGIN_NETWORK_REQUEST, END_NETWORK_REQUEST } from '../../common/actions'

/**
 *  {
 *    'serviceRequests': ['*', 12]
 *  }
 *
 */


let initialState = {
  currentServiceRequests: [],
  pastServiceRequests: []
}

export default createReducer(initialState, {
  [BEGIN_NETWORK_REQUEST](state, action) {
    return {
      ...state,
      ..._.set({}, action.payload.name, [
        ...state[action.payload.name] || [],
        action.payload.id
      ])
    }
  },

  [END_NETWORK_REQUEST](state, action) {
    return {
      ...state,
      ..._.set({}, action.payload.name, [
        _.without(state[action.payload.name] || [], action.payload.id)
      ])
    }
  },
})
