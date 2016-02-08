import { createReducer } from './reducers__utils.js'
import { LOAD_FAQS } from '../../common/actions'

export default createReducer([], {
  [LOAD_FAQS](state, action) {
    return action.error ? state : action.payload.faqs
  },
})
