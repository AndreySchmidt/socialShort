import {
  LOAD_BLOG_LIST_ACTION,
} from './../../constants'


const initialState = {
  blogLP: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_BLOG_LIST_ACTION:
      return {
        list : [...action.payload.list],
        loaded: true,
        activePage: 0,
    }
    default:
      // console.log('default blog_list reducer')
      return state
  }
}
