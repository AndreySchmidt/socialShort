import {
  SET_USER_PROFILE_ACTION,
} from './../../constants'

export function setUserProfile (userData) {
  return {
    type: SET_USER_PROFILE_ACTION,
    payload: { userData }
  }
}
