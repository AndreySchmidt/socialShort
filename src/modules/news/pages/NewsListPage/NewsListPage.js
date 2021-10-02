import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'

import './../../../app/components/css/ad_list_page.css'
import './../../../app/components/css/breadcrumbs_bar.css'
import './../../components/css/news_block.css'
import './../../components/css/currency_block.css'
import './../../components/css/news_layout.css'
import './news_list_view.css'

const NewsListPage = () => {
  return (
    <PageLayout>
      <Pagination />
        <div className="c_news_list_view">
          <div className="list_item clearfix">
            <h4 className="title"><Link to="#">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
            <div className="image_container">
              <Link to="#"><img className="image" src="images/pic-width-200.jpg" alt="" /></Link>
            </div>
            <div className="content_inner clearfix">
              <div className="description">Ночной клуб Брюлов ждет любтелей хорошо отдохнуть. Уже в эту пятницу долгожданное Retro-Party и море новых коктелей от лучших барменов...</div>
              <Link className="goto" to="#">Обсудить</Link>
              <span className="views">456 комментариев</span>
              <span className="date">8 декабря 2013</span>
            </div>
          </div>
          <div className="list_item clearfix">
            <h4 className="title"><Link to="#">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
            <div className="image_container">
              <Link to="#"><img className="image" src="images/pic-width-200.jpg" alt="" /></Link>
            </div>
            <div className="content_inner clearfix">
              <div className="description">Ночной клуб Брюлов ждет любтелей хорошо отдохнуть. Уже в эту пятницу долгожданное Retro-Party и море новых коктелей от лучших барменов...</div>
              <Link className="goto" to="#">Обсудить</Link>
              <span className="views">456 комментариев</span>
              <span className="date">8 декабря 2013</span>
            </div>
          </div>
          <div className="list_item clearfix">
            <h4 className="title"><Link to="#">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
            <div className="image_container">
              <Link to="#"><img className="image" src="images/pic-width-200.jpg" alt="" /></Link>
          </div>
          <div className="content_inner clearfix">
            <div className="description">Ночной клуб Брюлов ждет любтелей хорошо отдохнуть. Уже в эту пятницу долгожданное Retro-Party и море новых коктелей от лучших барменов...</div>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 комментариев</span>
            <span className="date">8 декабря 2013</span>
          </div>
        </div>
      </div>
      <Pagination />
    </PageLayout>
  )
}

export default NewsListPage
