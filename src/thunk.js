import {userApi} from './userApi.js'
import {followBtn, unfollowBtn, setUserList, setTotalUsersQuan} from './modules/app/actions'

export const getUserList = (currentPage, pageSize) => {
  return  (dispatch) => {
    userApi.getList(currentPage, pageSize).then(data => {
      dispatch(setUserList(data.items))
      dispatch(setTotalUsersQuan(data.totalCount))
      console.log(data.totalCount)
    })
  }
}

export const follow = (userId) => {
  return  (dispatch) => {
    userApi.follow(userId).then(response => {
      if(response.data.resultCode === 0){
        dispatch(followBtn(userId))
      }
    })
  }
}

export const unfollow = (userId) => {
  return  (dispatch) => {
    userApi.unfollow(userId).then(response => {
      if(response.data.resultCode === 0){
        dispatch(unfollowBtn(userId))
      }
    })
  }
}