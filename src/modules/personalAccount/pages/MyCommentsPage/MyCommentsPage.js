import React from 'react'
import {Link} from 'react-router-dom'

import adsearchextlist from './../../../../images/ad-search-ext-list.jpg'
import videolastcomment from './../../../../images/video-last-comment.jpg'

import './MyCommentsPage.css'
import './../../components/css/lk_user_data.css'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'

const MyCommentsPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">Мои комментарии</div>

      <div className="c_settings_layout clearfix">
        <div className="setting_sections_block">
          <div className="section_title">Фильтры поиска</div>

          <div className="section_link active"><Link to="#">Все</Link></div>
          <div className="section_link"><Link to="#">Фото</Link></div>
          <div className="section_link"><Link to="#">Видео</Link></div>
          <div className="section_link"><Link to="#">Новости</Link></div>
          <div className="section_link"><Link to="#">Мероприятия</Link></div>
          <div className="section_link"><Link to="#">Блоги</Link></div>
          <div className="section_link"><Link to="#">Товары</Link></div>
        </div>

        <div className="layout_inner">
          <div className="layout_inner_space">

            <div className="c_lk_comments">

              <div className="comment clearfix">
                <div className="preview">
                  <Link to="#"><img className="video_img" src={adsearchextlist} alt="" /></Link>
                </div>
                <div className="inner">
                  <div className="text">Если стероиды запрещены для атлетов, то почему фотошоп разрешен для моделей?</div>
                  <span className="date">10.02.2014</span>
                  <Link className="delete" to="#" title="Удалить комментарий">Удалить</Link>
                </div>
              </div>

              <div className="comment clearfix">
                <div className="preview">
                  <Link to="#"><img className="video_img" src={videolastcomment} alt="" /></Link>
                </div>
                <div className="inner">
                  <div className="text">Лысый жгет! Отправлю Максу ))</div>
                  <span className="date">10.02.2014</span>
                  <Link className="delete" to="#" title="Удалить комментарий">Удалить</Link>
                </div>
              </div>

              <div className="comment clearfix">
                <h4 className="title"><Link to="#">Заголовок новости</Link></h4>
                <div className="inner">
                  <div className="text">
                    Комментировать новости, тоже самое, что разговаривать с телевизором.
                  </div>
                  <span className="date">10.02.2014</span>
                  <Link className="delete" to="#" title="Удалить комментарий">Удалить</Link>
                </div>
              </div>

              <div className="comment clearfix">
                <h4 className="title"><Link to="#">Заголовок мероприятия</Link></h4>
                <div className="inner">
                  <div className="text">
                    Отлично погуляли!! Чуваки, кто-то видел мой телефон ?!?
                  </div>
                  <span className="date">10.02.2014</span>
                  <Link className="delete" to="#" title="Удалить комментарий">Удалить</Link>
                </div>
              </div>

              <div className="comment clearfix">
                <h4 className="title"><Link to="#">Заголовок блога </Link></h4>
                <div className="inner">
                  <div className="text">
                    Знаете ли вы, что если Золотую рыбку положить на сковородку, то количество желаний может увеличиться до пятидесяти?
                  </div>
                  <span className="date">10.02.2014</span>
                  <Link className="delete" to="#" title="Удалить комментарий">Удалить</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </PageLayout>
  )
}

export default MyCommentsPage
