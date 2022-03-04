import {
  LOGIN_ACTION,//при нажатии сабмита формы логина
  SET_MY_USER_DATA_ACTION,//при получении данных пользователя с сервера
} from './constants'

const initialState = {
  id: 0,
  login: '',
  email: '',
  isAuth: false,
  isFetching: false,
}

export default function commonReducer (state = initialState, action) {
  switch (action.type) {

    case LOGIN_ACTION:
      return {
        ...state,
        ...action.payload,
      }

    case SET_MY_USER_DATA_ACTION:
      // console.log('default commonReducer', action.payload)
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      }

    default:
      // console.log('default commonReducer', action)
      return state
  }
}
