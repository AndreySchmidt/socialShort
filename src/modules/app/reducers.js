import { FOLLOW_ACTION, UNFOLLOW_ACTION, PAGE_NUMBER_ACTION } from './../../constants'
export default function appReducer (state = {}, action) {
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
