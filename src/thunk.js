import {userApi} from './userApi.js'
import {setUserProfile} from './modules/personalAccount/actions'
import {followBtn, unfollowBtn, setUserList, setTotalUsersQuan, isFetching} from './modules/app/actions'

export const getUserProfile = (userId) => {
  return  (dispatch) => {
    userApi.getItem(userId).then(data => {
      dispatch(setUserProfile(data))
      // console.log(data, 'userApi.getItem')
    })
  }
}

export const getUserList = (currentPage, pageSize) => {
  return  (dispatch) => {
    dispatch(isFetching(true))
    userApi.getList(currentPage, pageSize).then(data => {
      dispatch(setUserList(data.items))
      dispatch(setTotalUsersQuan(data.totalCount))
      // console.log(data.totalCount)
    })
    dispatch(isFetching(false))
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
