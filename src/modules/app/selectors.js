// reselect begin
// import { createSelector } from "reselect"
// reselect end

export const isFetchingSelector = ( state ) => {
  return state.appReducer.isFetching
}

export const currentPageSelector = ( state ) => {
  return state.appReducer.currentPage
}

export const totalUsersQuanSelector = ( state ) => {
  return state.appReducer.totalUsersQuan
}

export const pageSizeSelector = ( state ) => {
  return state.appReducer.pageSize
}

export const usersSelector = ( state ) => {
  return state.appReducer.users
}

// export const exampleReselect = createSelector(usersSelector, ( users ) => {
//   return users.filter( ( item ) => { true } )
// })
