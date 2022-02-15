import {//TODO
  FOLLOW_ACTION,
  UNFOLLOW_ACTION,
  PAGE_NUMBER_ACTION,
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
//TODO
export function setUserList () {
  return {
    type: "setUserList",
  }
}
//TODO
export function setTotalUsersQuan () {
  return {
    type: "setTotalUsersQuan",
  }
}

export function loadPage () {
  return {
    type: PAGE_NUMBER_ACTION,
  }
}
