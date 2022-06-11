import React from 'react'
import personalAccountReducer from './reducers'
import {setUserProfile, setUserStatus} from './actions'

it(
  'test name SET_USER_STATUS_ACTION',
  () => {
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
    const action = setUserStatus('New status str')
    let newState = personalAccountReducer(initialState, action)

    console.log(initialState)
    console.log(action)

    expect(newState.status.length).toBe(14)
    expect(newState.status).toBe('New status str')
  }
)
