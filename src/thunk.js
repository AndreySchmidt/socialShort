import {userApi} from './userApi.js'
import {setUserProfile} from './modules/personalAccount/actions'
import {followBtn, unfollowBtn, setUserList, setTotalUsersQuan, isFetching} from './modules/app/actions'
import {setMyUserData} from './actions'

export const authMe = () => {
  return  (dispatch) => {
    userApi.authMe().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setMyUserData(response.data.data))
      }
      // dispatch(setUserProfile(data))
      // console.log(data, 'thunk authMe')
    })
  }
}

export const getUserProfile = (userId) => {
  return  (dispatch) => {
    userApi.getItem(userId).then(data => {
      dispatch(setUserProfile(data))
      // dispatch(getUserStatus(userId))
      // console.log(data, 'thunk getItem')
    })
  }
}

export const getUserStatus = (userId) => {
  return  (dispatch) => {
    userApi.getStatus(userId).then(data => {
      // dispatch(setUserStatus(data.statusText))
      console.log(data, 'thunk getUserStatus')
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
