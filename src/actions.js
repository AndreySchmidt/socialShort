import {
  LOGIN_ACTION,
} from './constants'

export function login (data) {
  return {
    type: LOGIN_ACTION,
    payload: { data }
  }
}
