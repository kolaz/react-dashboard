// Imports
import jwtDecode from 'jwt-decode'
import isEmpty from 'lodash/isEmpty'

// App Imports
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from '../actions/types'

// Auth (user)

// Initial State

export const authInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null
}

// State
export default (state = authInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.data.access),
        details: jwtDecode(action.data.access)
      }

    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: action.isLoading
      }

    case LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    case LOGOUT:
      return authInitialState

    default:
      return state
  }
}
