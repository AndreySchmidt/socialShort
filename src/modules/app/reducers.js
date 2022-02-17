import { SET_USER_LIST_ACTION, SET_TOTAL_USERS_QUANTITY_ACTION, FOLLOW_ACTION, UNFOLLOW_ACTION, PAGE_NUMBER_ACTION } from './../../constants'

let initialState = {
  users : [
    // {
    //   id:1,
    //   name:"Name Some",
    //   status:"status",
    //   photos:{small:null},
    //   followed:true
    // },
  ],
}

export default function appReducer (state = initialState, action) {
  switch (action.type) {
    case PAGE_NUMBER_ACTION:
      return {}

    case SET_USER_LIST_ACTION:
      return {
        users: action.payload.userList
        // users: [...action.payload.userList]
        // users: [...state.users, ...action.payload.userList]
      }

    case SET_TOTAL_USERS_QUANTITY_ACTION://TODO
      return state
      // return {
      //    ...state
      // }

    case FOLLOW_ACTION:
      return {
        // users : [...state.users], map new arr
        users : state.users.map(user => {
          if(user.id === Number(action.payload.userId)){
            return {...user, followed: true}
          }

          return user
        }),
        userId: Number(action.payload.userId),
      }
    case UNFOLLOW_ACTION:
      return {
        users : state.users.map(user => {
          if(user.id === Number(action.payload.userId)){
            return {...user, followed: false}
          }

          return user
        }),
        userId: Number(action.payload.userId),
      }
    default:
      return state
  }
}
