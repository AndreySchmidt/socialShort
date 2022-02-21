import {
  IS_FETCHING_ACTION,
  SET_USER_LIST_ACTION,
  SET_TOTAL_USERS_QUANTITY_ACTION,
  FOLLOW_ACTION,
  UNFOLLOW_ACTION,
  SET_CURRENT_PAGE_NUMBER_ACTION
} from './../../constants'

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
  currentPage: 1,
  isFetching: false,
}

export default function appReducer (state = initialState, action) {
  // console.log('appReducer', '--')
  switch (action.type) {

    case SET_CURRENT_PAGE_NUMBER_ACTION:
    // console.log(action.payload.currentPage, 'SET_CURRENT_PAGE_NUMBER_ACTION')
      return {
        ...state,
        currentPage: action.payload.currentPage
      }

    case SET_USER_LIST_ACTION:
    // console.log('SET_USER_LIST_ACTION', 'SET_USER_LIST_ACTION')
      return {
        ...state,
        users: action.payload.userList
        // users: [...action.payload.userList]
        // users: [...state.users, ...action.payload.userList]
      }

    case SET_TOTAL_USERS_QUANTITY_ACTION:
    // console.log('SET_TOTAL_USERS_QUANTITY_ACTION', 'SET_TOTAL_USERS_QUANTITY_ACTION')
      return {
         ...state,
         totalUsersQuan: action.payload.usersQuantity
      }

    case IS_FETCHING_ACTION:
    // console.log('IS_FETCHING_ACTION', 'IS_FETCHING_ACTION')
      return {
         ...state,
         isFetching: action.payload.isFetching
      }

    case FOLLOW_ACTION:
    // console.log('FOLLOW_ACTION', 'FOLLOW_ACTION')
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
    // console.log('UNFOLLOW_ACTION', 'UNFOLLOW_ACTION')
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
      // console.log('default', 'default')
      return state
  }
}
