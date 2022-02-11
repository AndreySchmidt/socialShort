// import { LOAD_BLOG_LIST_ACTION, LOAD_BLOG_LIST_POPULAR_ACTION, LOAD_BLOG_LIST_MOST_TALKED_ABOUT_ACTION } from './../../constants'
// export default function reducer (state = {}, action) {
//   switch (action.type) {
//     case LOAD_BLOG_LIST_ACTION:
//       return {
//         list : [...action.payload.list],
//         loaded: true,
//         activePage: 0,
//         // activeArticleList: this.getActiveArticles(articleList)
//       }
//     case LOAD_BLOG_LIST_POPULAR_ACTION:
//       return {
//         loaded: false,
//       }
//     case LOAD_BLOG_LIST_MOST_TALKED_ABOUT_ACTION:
//       return {
//         quantity: Number(action.payload.quantity),
//       }
//       // break
//     default:
//       console.log('default blog_list reducer')
//       return state
//   }
// }
