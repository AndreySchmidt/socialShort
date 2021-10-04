import React from 'react'
import {Link} from 'react-router-dom'

import videothumb from './../../../../images/video-thumb.jpg'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'
// import QuickSearch from './../../components/QuickSearch/QuickSearch'// <QuickSearch placeholder="Поиск по видеофайлам" />

import './VideoPage.css'
import Search from './../../../app/components/Search/Search'
import './../../../app/components/css/breadcrumbs_bar.css'
import './../../components/css/lk_user_data.css'

const VideoPage = () => {
  return (
    <PageLayout>
    <Search />

      <div className="c_breadcrumbs_bar">
        <Link to="#" className="back">Назад</Link>
        <div className="breadcrumbs">
          <Link to="#">Видео</Link>
          <span className="separator">&gt;</span>
          <Link to="#">Видео пользователей</Link>
        </div>
      </div>
      <Pagination />

      <div className="c_video_category">

        <div className="video_row">
          <div className="video_tmb_container">
            <Link to="#"><img src={videothumb} className="video_img" alt="" /></Link>
          </div>
          <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
          <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
        </div>

        <div className="video_row">
          <div className="video_tmb_container">
            <Link to="#"><img src={videothumb} className="video_img" alt="" /></Link>
          </div>
          <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
          <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
        </div>

        <div className="video_row">
          <div className="video_tmb_container">
            <Link to="#"><img src={videothumb} className="video_img" alt="" /></Link>
          </div>
          <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
          <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
        </div>

      </div>
      <Pagination />
    </PageLayout>
  )
}

export default VideoPage
