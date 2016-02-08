import { TOGGLE_SIDEBAR } from '../../common/actions'

const initialState = {
  showSidebar: false
}

export default function sidebar(state = initialState, action = {}) {
  switch(action.type){
    case TOGGLE_SIDEBAR:
      return Object.assign({}, state, {
        showSidebar: action.payload.isOpen
      })

    default:
      return state
  }
}
