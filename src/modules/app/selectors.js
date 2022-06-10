// reselect begin
// import { createSelector } from "reselect"
// reselect end

export const isFetchingSelector = state => state.appReducer.isFetching
export const currentPageSelector = state => state.appReducer.currentPage
export const totalUsersQuanSelector = state => state.appReducer.totalUsersQuan
export const pageSizeSelector = state => state.appReducer.pageSize
export const usersSelector = state => state.appReducer.users

// export const exampleReselect = createSelector(
//   usersSelector,
//   ( users ) => { users.filter( ( item ) => { return item } )} )

// console.log(exampleReselect())



// const exampleState = {
//   shop: {
//     taxPercent: 8,
//     items: [
//       { name: 'apple', value: 1.2 },
//       { name: 'orange', value: 0.95 }
//     ]
//   }
// }
// const selectShopItems = exampleState => exampleState.shop.items
// const selectTaxPercent = exampleState => exampleState.shop.taxPercent
//
// const selectSubtotal = createSelector(selectShopItems, items =>
//   items.reduce((subtotal, item) => subtotal + item.value, 0)
// )
//
// const selectTax = createSelector(
//   selectSubtotal,
//   selectTaxPercent,
//   (subtotal, taxPercent) => subtotal * (taxPercent / 100)
// )
//
// const selectTotal = createSelector(
//   selectSubtotal,
//   selectTax,
//   (subtotal, tax) => ({ total: subtotal + tax })
// )
// console.log(selectSubtotal(exampleState)) // 2.15
// console.log(selectTax(exampleState)) // 0.172
// console.log(selectTotal(exampleState)) // { total: 2.322 }
