import _ from 'lodash'

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}


export function entriesById(items) {
  return _.reduce(items, (acc, item) => (_.set(acc, item.id, item)), {})
}
