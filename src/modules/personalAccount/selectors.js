// reselect begin
// import { createSelector } from "reselect"
//
// export exampleReselect = createSelector( () => {
//
// } )
// reselect end

export const getUserId = ( state ) => {
  return state.personalAccountReducer.userId
}

export const getStatus = ( state ) => {
  return state.personalAccountReducer.status
}

export const getLookingForAJob = ( state ) => {
  return state.personalAccountReducer.lookingForAJob
}

export const getLookingForAJobDescription = ( state ) => {
  return state.personalAccountReducer.lookingForAJobDescription
}

export const getFullName = ( state ) => {
  return state.personalAccountReducer.fullName
}

export const getContacts = ( state ) => {
  return state.personalAccountReducer.contacts
}

export const getPhotos = ( state ) => {
  return state.personalAccountReducer.photos
}
