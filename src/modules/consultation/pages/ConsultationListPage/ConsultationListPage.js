import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'

import './../../../app/components/css/ad_list_page.css'
import Search from './../../../app/components/Search/Search'
import './consultations.css'
import './consultation_filter.css'

const ConsultationListPage = () => {
  return (
    <PageLayout>
    <Search />
      <div className="c_consultation_filter">
        <div className="c_type_select">
          <Link className="active" to="#">Все вопросы</Link>
          <Link to="#">Наиболее обсуждаемые</Link>
          <Link to="#">Лучшие вопросы</Link>
        </div>
      </div>
      <Pagination />
      <div className="c_consultations">
        <div className="bid clearfix">
          <Link to="#" className="photo"><img alt="" src="images/ava-53x53.jpg" /></Link>
          <div className="first-line">
            <Link to="#" className="name">Владимир Владимирович Бондарчук</Link>
            <span className="status online">online</span>
          </div>
          <span className="date">29.10.2013</span>
          <div className="text">
            <Link to="/consultation_item">В ходе валового анализа пространственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.</Link>
          </div>
          <div className="completive">
            <Link className="response" to="#">Ответы (5)</Link>
            <Link className="response" to="#">Прочие юридические вопосы</Link>
          </div>
        </div>
        <div className="bid clearfix">
          <Link to="#" className="photo"><img alt="" src="images/ava-53x53.jpg" /></Link>
          <div className="first-line">
            <Link to="#" className="name">Владимир Владимирович Бондарчук</Link>
            <span className="status online">online</span>
          </div>
          <span className="date">29.10.2013</span>
          <div className="text">
            <Link to="/consultation_item">Будет ли ФМС рассматривать заявление если называться ФИО вымышленного человека ?</Link>
          </div>
          <div className="completive">
            <Link className="response" to="#">Ответы (5)</Link>
            <Link className="response" to="#">Прочие юридические вопосы</Link>
          </div>
        </div>
        <div className="bid clearfix">
          <Link to="#" className="photo"><img alt="" src="images/ava-53x53.jpg" /></Link>
          <div className="first-line">
            <Link to="#" className="name">Владимир Владимирович Бондарчук</Link>
            <span className="status online">online</span>
          </div>
          <span className="date">29.10.2013</span>
          <div className="text">
            <Link to="/consultation_item">В ходе валового анализа пространственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.</Link>
          </div>
          <div className="completive">
            <Link className="response" to="#">Ответы (5)</Link>
            <Link className="response" to="#">Прочие юридические вопосы</Link>
          </div>
        </div>
      </div>
      <Pagination />
    </PageLayout>
  )
}

export default ConsultationListPage
