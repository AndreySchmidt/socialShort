import { SET_USER_LIST_ACTION, FOLLOW_ACTION, UNFOLLOW_ACTION, PAGE_NUMBER_ACTION } from './../../constants'

let initialState = {
  users : [
    // {
    //   id:1,
    //   fullname:"Name Some",
    //   status:"status",
    //   photo:{small:null},
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
        users: [...state, action.payload.userList]
      }

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
