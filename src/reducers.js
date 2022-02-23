import {
  LOGIN_ACTION,
} from './constants'

const initialState = {
  userId: 0,
  login: '',
  email: '',
  isFetching: false,
}

export default function commonReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        quantity: Number(action.payload.quantity),
      }
    default:
      // console.log('default commonReducer', action)
      return state
  }
}
