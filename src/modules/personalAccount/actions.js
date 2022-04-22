import {
  SET_USER_PROFILE_ACTION,
  SET_USER_STATUS_ACTION,
} from './../../constants'

export function setUserProfile (userData) {
  return {
    type: SET_USER_PROFILE_ACTION,
    payload: { userData }
  }
}

export function setUserStatus (status) {
  // console.log('setUserStatus ACTION', status)
  return {
    type: SET_USER_STATUS_ACTION,
    payload: { status }
  }
}
