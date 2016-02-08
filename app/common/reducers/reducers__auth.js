import { AUTHENTICATE, LOGIN, LOGOUT } from '../../common/actions'

const initialState = {}

export default function auth(state = initialState, action = {}) {
  switch(action.type){
    case AUTHENTICATE:
      return {
        token: action.error ? null : action.payload.token
        // token: 'qweqweqwe'
      }

  default:
    return state
  }
}
