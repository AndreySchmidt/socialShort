import { FOLLOW_ACTION, UNFOLLOW_ACTION, PAGE_NUMBER_ACTION } from './../../constants'

let initialState = {
  users : [
    // {
    //   id:1,
    //   fullname:"Name Some",
    //   photo:{small:null},
    //   followed:true
    // },
    // {
    //   id:2,
    //   fullname:"Name Some",
    //   photo:{small:null},
    //   followed:true
    // },
    // {
    //   id:3,
    //   fullname:"Name Some",
    //   photo:{small:null},
    //   followed:true
    // },
    // {
    //   id:4,
    //   fullname:"Name Some",
    //   photo:{small:null},
    //   followed:true
    // },
  ],
}

export default function appReducer (state = initialState, action) {
  switch (action.type) {
    case PAGE_NUMBER_ACTION:
      return {}

    case FOLLOW_ACTION:
      return {
        // users : [...state.users], map new arr
        users : state.users,
        userId: Number(action.payload.userId),
      }
    case UNFOLLOW_ACTION:
      return {
        users : [...state.users],
        userId: Number(action.payload.userId),
      }
    default:
      return state
  }
}
