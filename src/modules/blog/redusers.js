import { LOAD_ARTICLE_LIST_SUCCESSED_ACTION, LOAD_ARTICLE_LIST_ACTION, QUANTITY_CHANGED_ACTION } from './constants'
export default function reducer (state = [], action) {
  switch (action.type) {
    case LOAD_ARTICLE_LIST_SUCCESSED_ACTION:
      return {
        list : [...action.payload.list],
        loaded: true,
        activePage: 0,
        // activeArticleList: this.getActiveArticles(articleList)
      }
    case LOAD_ARTICLE_LIST_ACTION:
      return {
        loaded: false,
      }
    case QUANTITY_CHANGED_ACTION:
      return {
        quantity: Number(action.payload.quantity),
      }
      // break
    default:
      console.log('default blog_list reducer')
      return state
  }
}
