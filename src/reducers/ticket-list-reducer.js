import * as c from '../actions/ActionTypes'

const reducer = (state = {}, action) => {
  const { names, location, issue, id, formattedWaitTime, timeOpen } = action

  switch (action.type) {

    case c.ADD_TICKET:
      return Object.assign({}, state, {
        [id]: {
          names,
          location,
          issue,
          id,
          timeOpen,
          formattedWaitTime
        }
      })
    case c.DELETE_TICKET:
      const newState = { ...state }
      delete newState[id]
      return newState
    case c.UPDATE_TIME:
      const updatedTicket = Object.assign({}, state[id], {formattedWaitTime})
      const updatedState = Object.assign({}, state, {
        [id]: updatedTicket
      })
      return updatedState
    default:
      return state
    }

}

export default reducer