import _ from 'lodash'
import { createReducer } from './reducers__utils.js'
import { ADD_REQUEST_NOTIFICATION, READ_REQUEST_NOTIFICATION } from '../../common/actions'

export default (state = {}, action) => ({
  serviceRequests: serviceRequests(state.serviceRequests, action)
})

let serviceRequests = createReducer([], {
  [ADD_REQUEST_NOTIFICATION](state, action) {
    return [
      ...state,
      action.payload
  ]
  },
  [READ_REQUEST_NOTIFICATION](state, action) {
    return _.filter(state, ({id}) => id != action.payload.id)
  },
})

