import {//TODO
  FOLLOW_ACTION,
  UNFOLLOW_ACTION,
  PAGE_NUMBER_ACTION,
} from './../../constants'


//toggleBlogList + payload
export function follow () {
  return {
    type: FOLLOW_ACTION,
  }
}
export function unfollow () {
  return {
    type: UNFOLLOW_ACTION,
  }
}

export function loadPage () {
  return {
    type: PAGE_NUMBER_ACTION,
  }
}

// export function loadArticlesListFailed (error) {
//   return {
//     type: LOAD_ARTICLE_LIST_FAILED_ACTION,
//     payload: {
//       error
//     }
//   }
// }
//
// export function loadArticlesList () {
//   return {
//     type: LOAD_ARTICLE_LIST_ACTION,
//   }
// }
//
// export function loadArticlesListSuccessed (list) {
//   return {
//     type: LOAD_ARTICLE_LIST_SUCCESSED_ACTION,
//     payload: {
//       list
//       // list : list
//     }
//   }
// }
//
// export function quantityChangeAction (quantity) {
//   return {
//     type: QUANTITY_CHANGED_ACTION,
//     payload: {
//       quantity
//     }
//   }
// }
