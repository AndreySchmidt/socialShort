// Switch -> Router
import React from 'react'
import Page404 from './pages/Page404'
import HomePage from './pages/HomePage'

import UserPage from './../personalAccount/pages/UserPage/UserPage'
import MyCommentsPage from './../personalAccount/pages/MyCommentsPage/MyCommentsPage'
import MyListPage from './../personalAccount/pages/MyListPage/MyListPage'
import MyBlogListPage from './../personalAccount/pages/MyBlogListPage/MyBlogListPage'
import MyBlogItemPage from './../personalAccount/pages/MyBlogItemPage/MyBlogItemPage'
import MyConsultationListPage from './../personalAccount/pages/MyConsultationListPage/MyConsultationListPage'
import MessPage from './../personalAccount/pages/MessPage/MessPage'
import EditProfilePage from './../personalAccount/pages/EditProfilePage/EditProfilePage'
import FriendPage from './../personalAccount/pages/FriendPage/FriendPage'
import PhotoPage from './../personalAccount/pages/PhotoPage/PhotoPage'
import EditPhotoPage from './../personalAccount/pages/EditPhotoPage/EditPhotoPage'
import CalcListPage from './../personalAccount/pages/CalcListPage/CalcListPage'
import CalcItemPage from './../personalAccount/pages/CalcItemPage/CalcItemPage'
import PlanPage from './../personalAccount/pages/PlanPage/PlanPage'
import CartPage from './../personalAccount/pages/CartPage/CartPage'
import VideoPage from './../personalAccount/pages/VideoPage/VideoPage'
import AnnouncementPage from './../personalAccount/pages/AnnouncementPage/AnnouncementPage'

import AdvertisementListPage from './../advertisement/pages/AdvertisementListPage/AdvertisementListPage'
import AdvertisementPage from './../advertisement/pages/AdvertisementPage/AdvertisementPage'
import AdvertisementAddPage from './../advertisement/pages/AdvertisementAddPage/AdvertisementAddPage'
import PeopleListPage from './pages/PeopleListPage'
import BlogListPage from './../blog/pages/BlogListPage/BlogListPage'
import BlogItemPage from './../blog/pages/BlogItemPage/BlogItemPage'
import ConsultationListPage from './../consultation/pages/ConsultationListPage/ConsultationListPage'
import ConsultationItemPage from './../consultation/pages/ConsultationItemPage/ConsultationItemPage'
import NewsItemPage from './../news/pages/NewsItemPage/NewsItemPage'
import NewsListPage from './../news/pages/NewsListPage/NewsListPage'
import NewsMainPage from './../news/pages/NewsMainPage/NewsMainPage'

import { Switch, Route } from 'react-router-dom'

const App = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />

      <Route path='/news' component={NewsMainPage} />
      <Route path='/news_list' component={NewsListPage} />
      <Route path='/news_item' component={NewsItemPage} />
      <Route path='/consultation_item' component={ConsultationItemPage} />
      <Route path='/consultations' component={ConsultationListPage} />
      <Route path='/blog_item' component={BlogItemPage} />
      <Route path='/blogs' component={BlogListPage} />
      <Route path='/people' component={PeopleListPage} />
      <Route path='/advertisement_add' component={AdvertisementAddPage} />
      <Route path='/advertisement' component={AdvertisementPage} />
      <Route path='/advertisements' component={AdvertisementListPage} />

      <Route path='/user/:id(\d+)/announcement' component={AnnouncementPage} />
      <Route path='/user/:id(\d+)/video' component={VideoPage} />
      <Route path='/user/:id(\d+)/cart' component={CartPage} />
      <Route path='/user/:id(\d+)/plan' component={PlanPage} />
      <Route path='/user/:id(\d+)/calculator_item' component={CalcItemPage} />
      <Route path='/user/:id(\d+)/calculator' component={CalcListPage} />
      <Route path='/user/:id(\d+)/photo_edit' component={EditPhotoPage} />
      <Route path='/user/:id(\d+)/photo' component={PhotoPage} />
      <Route path='/user/:id(\d+)/friend' component={FriendPage} />
      <Route path='/user/:id(\d+)/edit_profile' component={EditProfilePage} />
      <Route path='/user/:id(\d+)/mess' component={MessPage} />
      <Route path='/user/:id(\d+)/consultation' component={MyConsultationListPage} />
      <Route path='/user/:id(\d+)/blog_item' component={MyBlogItemPage} />
      <Route path='/user/:id(\d+)/blog' component={MyBlogListPage} />
      <Route path='/user/:id(\d+)/my_list' component={MyListPage} />
      <Route path='/user/:id(\d+)/comment' component={MyCommentsPage} />
      <Route path='/user/:id(\d+)' component={UserPage} />
      <Route path='/me' component={UserPage} />

      <Route component={Page404} />
    </Switch>
  )
}

export default App

// if (__DEV__) {
//   console.log('It works!! Im dev env!!!!')
// }
