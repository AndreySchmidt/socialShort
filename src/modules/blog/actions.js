import {
  LOAD_BLOG_LIST_ACTION,
  LOAD_BLOG_LIST_POPULAR_ACTION,
  LOAD_BLOG_LIST_MOST_TALKED_ABOUT_ACTION,
  PAGE_NUMBER_ACTION,
} from './../../constants'


//toggleBlogList + payload
export function loadBlogList () {
  return {
    type: LOAD_BLOG_LIST_ACTION,
  }
}

export function loadBlogListPopular () {
  return {
    type: LOAD_BLOG_LIST_POPULAR_ACTION,
  }
}

export function loadBlogListTalkedAbout () {
  return {
    type: LOAD_BLOG_LIST_MOST_TALKED_ABOUT_ACTION,
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
