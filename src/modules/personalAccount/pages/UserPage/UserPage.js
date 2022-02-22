import React, {useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUserProfile} from './../../../../thunk'

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


const UserPage = ({userId, lookingForAJob, lookingForAJobDescription, fullName, contacts, photos, getUserProfile, match}) => {

console.log(match.params.id)

  useEffect(() => {
    getUserProfile(userId)
  }, [userId])

  return (
    <PageLayout>
      <InfoBlock />
      <HeaderSection />
      <MainContentAside photo={photos.small} />

      <div className="main_content_column">
        <Link className="change_interface" to="">изменить оформление</Link>
        <Status />

        <div className="interface_image"><img src={contentbg} alt="" /></div>

        <div className="c_main_content_wrapper">
          <div className="title"><span>Анкета</span> <Link to="/user/15/edit_profile">редактировать</Link></div>

          <ProfileOptionsList
            lookingForAJob={lookingForAJob}
            lookingForAJobDescription={lookingForAJobDescription}
            fullName={fullName}
            contacts={contacts}
          />

          <div className="show_full_data">
            <Link to=""><i></i>Показать анкету полностью<i></i></Link>
          </div>
        </div>

        <div className="c_main_content_wrapper">
          <div className="title"><span>Я в соц. сетях</span> <Link to="">редактировать</Link></div>
          <SocialLinks />
        </div>

        <div className="c_main_content_wrapper">
          <div className="title"><span>Мой блог</span> <Link to="">редактировать</Link></div>
          <ShortBlogList />
        </div>

        <div className="c_main_content_wrapper">
          <div className="title"><span>Мое местоположение </span> <Link to="">редактировать</Link></div>
          <PlaceMap />
        </div>

        <div className="c_main_content_wrapper">
          <div className="title"><span>Моя стена</span> <Link to="">редактировать</Link></div>
          <Wall />

          <div className="show_full_data">
            <Link to=""><i></i>Показать еще 15 записей<i></i></Link>
          </div>
        </div>

      </div>
    </PageLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    userId: state.personalAccountReducer.userId,
    lookingForAJob: state.personalAccountReducer.lookingForAJob,
    lookingForAJobDescription: state.personalAccountReducer.lookingForAJobDescription,
    fullName: state.personalAccountReducer.fullName,
    contacts: state.personalAccountReducer.contacts,
    photos: state.personalAccountReducer.photos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: (userId) => dispatch(getUserProfile(userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserPage))
