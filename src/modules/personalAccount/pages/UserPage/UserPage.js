import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getUserProfile, getUserStatus, updateUserStatus } from './../../../../thunk'
import AuthRedirect from './../../../app/components/HOC/AuthRedirect'
import { getUserId, getStatus, getLookingForAJob, getLookingForAJobDescription, getFullName, getContacts, getPhotos } from './../../selectors'

import contentbg from './../../../../img/content-bg.jpg'

import PageLayout from './../../PageLayout/PageLayout'

import InfoBlock from './components/InfoBlock/InfoBlock'
import HeaderSection from './components/HeaderSection/HeaderSection'
import MainContentAside from './components/MainContentAside/MainContentAside'
import Status from './components/Status/Status'
import ProfileOptionsList from './components/ProfileOptionsList/ProfileOptionsList'
import SocialLinks from './components/SocialLinks/SocialLinks'
import ShortBlogList from './components/ShortBlogList/ShortBlogList'
import PlaceMap from './components/PlaceMap/PlaceMap'
import Wall from './components/Wall/Wall'


// const UserPage = ({userId, lookingForAJob, lookingForAJobDescription, fullName, contacts, photos, getUserProfile, match}) => {
// const UserPage = ({isAuth, lookingForAJob, lookingForAJobDescription, fullName, contacts, photos, getUserProfile, match}) => {
const UserPage = ( {
  lookingForAJob, lookingForAJobDescription, fullName, contacts, photos,
  status, getUserProfile, getUserStatus, updateUserStatus,
  match
} ) => {

// console.log(match.params.id)
// console.log('zzz', status)

const userId = match.params.id

  useEffect(() => {
    getUserProfile(userId)
    // getUserStatus(userId)
  }, [userId])

  // if (!isAuth) {
  //   return <Redirect to = "/" />
  // }

  return (
    <PageLayout>
      <InfoBlock />
      <HeaderSection name = {fullName} />
      <MainContentAside photo={photos.small} />

      <div className="main_content_column">
        <Link className="change_interface" to="">???????????????? ????????????????????</Link>

        <Status userId={userId} />

        <div className="interface_image"><img src={contentbg} alt="" /></div>

        <div className="c_main_content_wrapper">
          <div className="title"><span>????????????</span> <Link to="/user/22510/edit_profile">??????????????????????????</Link></div>

          <ProfileOptionsList
            lookingForAJob={lookingForAJob}
            lookingForAJobDescription={lookingForAJobDescription}
            fullName={fullName}
            contacts={contacts}
          />

          <div className="show_full_data">
            <Link to=""><i></i>???????????????? ???????????? ??????????????????<i></i></Link>
          </div>
        </div>

        <div className="c_main_content_wrapper">
          <div className="title"><span>?? ?? ??????. ??????????</span> <Link to="">??????????????????????????</Link></div>
          <SocialLinks />
        </div>

        <div className="c_main_content_wrapper">
          <div className="title"><span>?????? ????????</span> <Link to="">??????????????????????????</Link></div>
          <ShortBlogList />
        </div>

        <div className="c_main_content_wrapper">
          <div className="title"><span>?????? ???????????????????????????? </span> <Link to="">??????????????????????????</Link></div>
          <PlaceMap />
        </div>

        <div className="c_main_content_wrapper">
          <div className="title"><span>?????? ??????????</span> <Link to="">??????????????????????????</Link></div>
          <Wall />

          <div className="show_full_data">
            <Link to=""><i></i>???????????????? ?????? 15 ??????????????<i></i></Link>
          </div>
        </div>

      </div>
    </PageLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    userId: getUserId(state),
    status: getStatus(state),
    lookingForAJob: getLookingForAJob(state),
    lookingForAJobDescription: getLookingForAJobDescription(state),
    fullName: getFullName(state),
    contacts: getContacts(state),
    photos: getPhotos(state),
  }
}
// old (before selectors)
// const mapStateToProps = (state) => {
//   return {
//     // isAuth: state.commonReducer.isAuth,
//     userId: state.personalAccountReducer.userId,
//     status: state.personalAccountReducer.status,
//     lookingForAJob: state.personalAccountReducer.lookingForAJob,
//     lookingForAJobDescription: state.personalAccountReducer.lookingForAJobDescription,
//     fullName: state.personalAccountReducer.fullName,
//     contacts: state.personalAccountReducer.contacts,
//     photos: state.personalAccountReducer.photos,
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: (userId) => dispatch(getUserProfile(userId)),
    getUserStatus: (userId) => dispatch(getUserStatus(userId)),
    updateUserStatus: (userStatus) => dispatch(updateUserStatus(userStatus)),
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthRedirect(UserPage)))
export default compose( AuthRedirect, withRouter, connect( mapStateToProps, mapDispatchToProps ) )( UserPage )
