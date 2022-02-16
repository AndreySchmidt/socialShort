import {
  SET_USER_LIST_ACTION,
  SET_TOTAL_USERS_QUANTITY_ACTION,
  FOLLOW_ACTION,
  UNFOLLOW_ACTION,
  PAGE_NUMBER_ACTION,//TODO
} from './../../constants'


//toggleBlogList + payload
export function followBtn (userId) {
  return {
    type: FOLLOW_ACTION,
    payload: { userId }
  }
}

export function unfollowBtn (userId) {
  return {
    type: UNFOLLOW_ACTION,
    payload: { userId }
  }
}

export function setUserList (userList) {
  return {
    type: SET_USER_LIST_ACTION,
    payload:{ userList }
  }
}

export function setTotalUsersQuan (quantity) {
  return {
    type: SET_TOTAL_USERS_QUANTITY_ACTION,
    payload:{ usersQuantity: Number(quantity) }
  }
}
//TODO
export function loadPage () {
  return {
    type: PAGE_NUMBER_ACTION,
  }
}
