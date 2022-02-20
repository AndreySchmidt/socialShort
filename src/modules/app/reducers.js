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
  pageSize:10,
  totalUsersQuan:0,
  currentPage: 1
}

export default function appReducer (state = initialState, action) {
  switch (action.type) {
    case PAGE_NUMBER_ACTION:
      return {...state}

    case SET_USER_LIST_ACTION:
      return {
        ...state,
        users: action.payload.userList
        // users: [...action.payload.userList]
        // users: [...state.users, ...action.payload.userList]
      }

    case SET_TOTAL_USERS_QUANTITY_ACTION:
      return {
         ...state,
         totalUsersQuan: action.payload.usersQuantity
      }

    case FOLLOW_ACTION:
      return {
        // users : [...state.users], map new arr
        ...state,
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
        ...state,
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
