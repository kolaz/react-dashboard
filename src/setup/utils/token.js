// Imports
import React from 'react'
import { useDispatch } from 'react-redux'

// App Imports
import { SET_USER } from '../../modules/user/api/actions/types'


// 
export function setAuthorizationHeader(token = null) {
    if (token) {
      axios.defaults.headers.common['Authentication'] = `Bearer ${token}`;
      //axios.setToken(token, 'Bearer')
    } else {
      delete axios.defaults.headers.common['Authentication'];
    }
}


export const checkAuthorization = () => {
    const dispatch = useDispatch()
    const { data } = sessionStorage.token

    if (data) {
      setAuthorizationHeader(sessionStorage.token);
      dispatch({
        type: SET_USER,
        data
      })
    }
  }