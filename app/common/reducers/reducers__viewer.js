import {
  LOGOUT, AUTHENTICATE, UPDATE_VIEWER_PROFILE,
  REQUEST_PHONE_CONFIRMATION,
  CONFIRM_PHONE,
} from '../../common/actions'


export default function viewer(state = null, action = {}) {
  switch (action.type) {
    case UPDATE_VIEWER_PROFILE: // we want exactly same effect
    case AUTHENTICATE:
      if (action.error) {
        return null
      }
      return {
        isCurrentAccountOwner: action.payload.customer.currentAccountRole === 'account_owner',
        ...action.payload.customer,
      }

    case LOGOUT:
      return null

    case REQUEST_PHONE_CONFIRMATION:
      return {
        ...state,
        ... action.error ? null : action.payload.customer,
      }

    case CONFIRM_PHONE:
      return {
        ...state,
        ... action.error ? null : action.payload.customer,
      }

    default:
      return state
  }
}
