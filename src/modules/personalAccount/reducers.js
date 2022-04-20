import {
  SET_USER_PROFILE_ACTION,
  SET_USER_STATUS_ACTION,
} from './../../constants'

const initialState = {
  status: '',
  userId: 0,
  lookingForAJob: false,
  lookingForAJobDescription: '',
  fullName: '',
  contacts: {
    github: '',
    vk: '',
    facebook: '',
    instagram: '',
    twitter: '',
    website: '',
    youtube: '',
    mainLink: '',
  },
  photos: {
    small: '',
    large: ''
  }
}

export default function personalAccountReducer (state = initialState, action) {
  switch (action.type) {

    case SET_USER_PROFILE_ACTION:
    // console.log('SET_USER_PROFILE_ACTION', 'SET_USER_PROFILE_ACTION')
      return {
        ...state,
        ...action.payload.userData
      }

    case SET_USER_STATUS_ACTION:
    // console.log('SET_USER_STATUS_ACTION', 'SET_USER_STATUS_ACTION')
    console.log('SET_USER_STATUS_ACTION', action.payload)
      return {
        ...state,
        ...action.payload.status
      }

    default:
      // console.log('default', 'default')
      return state
  }
}
