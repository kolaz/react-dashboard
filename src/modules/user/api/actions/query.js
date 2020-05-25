// Imports
import axios from 'axios'

// App Imports
import { loginUser } from '../../../../setup/api/auth'
import { getMyself } from '../../../../setup/api/users'
import { MESSAGE_SHOW } from '../../../common/api/actions'
import { LOGIN_REQUEST, LOGIN_RESPONSE, SET_USER, LOGOUT } from './types'

// Actions

// Login a user using credentials
export function login({ email, password }, isLoading = true) {
  return async dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
      isLoading
    })

    dispatch({
      type: MESSAGE_SHOW,
      message: 'Please wait..'
    })

    try {
      const data = await loginUser({email, password})
      let message = ''

      if(data) {

        dispatch({
          type: SET_USER,
          data
        })
        setUserLocally(data.access)

      } else {
        message = data.message
      }

      dispatch({
        type: MESSAGE_SHOW,
        message
      })
    } catch(error) {
      console.log(error)
      dispatch({
        type: MESSAGE_SHOW,
        message: 'Please try again.'
      })
    } finally {
      dispatch({
        type: LOGIN_RESPONSE
      })
    }
  }
}


// 
export function setAuthorizationHeader(token = null) {
  if (token) {
    axios.defaults.headers.common['Authentication'] = `Bearer ${token}`;
    //axios.setToken(token, 'Bearer')
  } else {
    delete axios.defaults.headers.common['Authentication'];
  }
}


// Log out user and remove token from local (AsyncStorage)
export function logout() {
  return dispatch => {
    unsetUserLocally()

    dispatch({
      type: LOGOUT
    })
  }
}

// Set a user after login or using local (AsyncStorage) token
export function setUser(data) {
  return dispatch => {
    setUserLocally(data)

    dispatch({
      type: SET_USER,
      data
    })
  }
}

// Get list
export function getList() {
  return getMyself('userList')
}

// Get count
export function getDashboardCount() {
  return getMyself('userDashboardCount')
}

// Set user token and info locally (AsyncStorage)
export function setUserLocally(token) {
  // Set token
  sessionStorage.setItem('token', token)
}

// Unset user token and info locally (AsyncStorage)
export function unsetUserLocally() {
  // Remove token
  sessionStorage.removeItem('token')

  // Remove cached data
  for(let item of Object.keys({...sessionStorage})) {
    if(item.indexOf('CACHE.KEY.') !== -1) {
      sessionStorage.removeItem(item)
    }
  }
}
