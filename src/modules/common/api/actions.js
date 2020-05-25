// Imports
import axios from 'axios/index'

// API Imports
import { BASE_URL } from '../../../setup/api/base'

// Actions Types
export const MESSAGE_SHOW = 'COMMON_MESSAGE_SHOW'
export const MESSAGE_HIDE = 'COMMON_MESSAGE_HIDE'

export function messageShow(message) {
  return { type: MESSAGE_SHOW, message }
}

export function messageHide() {
  return { type: MESSAGE_HIDE }
}

export function upload(data) {
  return dispatch => {
    return axios.post(`${ BASE_URL }/upload`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
