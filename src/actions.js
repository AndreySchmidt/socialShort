import {
  LOGIN_ACTION,
  SET_MY_USER_DATA_ACTION,
  SET_USER_PHOTO_ACTION,
} from './constants'

// login form data
export function login (userId, email, login) {
  return {
    type: LOGIN_ACTION,
    payload: { userId, email, login }
  }
}

//server data
export function setMyUserData (data) {
  return {
    type: SET_MY_USER_DATA_ACTION,
    payload: data
  }
}

//
export function setUserPhoto (data) {
  return {
    type: SET_USER_PHOTO_ACTION,
    payload: data
  }
}
