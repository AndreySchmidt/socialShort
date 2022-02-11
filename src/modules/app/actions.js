import {//TODO
  FOLLOW_ACTION,
  UNFOLLOW_ACTION,
  PAGE_NUMBER_ACTION,
} from './../../constants'


//toggleBlogList + payload
export function follow (userId) {
  return {
    type: FOLLOW_ACTION,
    payload: { userId }
  }
}
export function unfollow (userId) {
  return {
    type: UNFOLLOW_ACTION,
    payload: { userId }
  }
}

export function loadPage () {
  return {
    type: PAGE_NUMBER_ACTION,
  }
}
