import userApi from './userApi.js'

export default const getUserList = (currentPage, pageSize) => {
  return  (dispatch) => {
    userApi.getList(currentPage, pageSize).then(data => {
      dispatch(setUserList(data.list))
      dispatch(setTotalUsersQuan(data.totalCount))
    })
  }
}
