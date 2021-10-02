import React from 'react'
import {Link} from 'react-router-dom'

import ava53x53 from './../../../app/AppPageLayout/images/ava-53x53.jpg'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'

import './MyConsultationListPage.css'
import './lk_consultation_filter.css'
import './../../components/css/lk_user_data.css'

const MyConsultationListPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="#">Ответить на вопросы</Link>
        <Link className="c_button_large link_right" to="#">Задать вопрос</Link> Участие в консультациях
      </div>

      <div className="c_lk_consultations">

        <div className="c_lk_consultation_filter">
          <div className="c_type_select">
            <Link to="#">Все вопросы</Link>
            <Link to="#">С моими ответами</Link>
            <Link to="#" className="active">Полученны новые ответы (4)</Link>
          </div>

          <div className="c_quick_search clearfix">
            <form action="#" method="GET">
              <div className="search_form">
                <input className="search_query" type="text" placeholder="Быстрый поиск" />
                <input className="search_reset" type="reset" title="Очистить" value="Очистить" />
                <input className="search_submit hidden" type="submit" value="Найти" />
              </div>
            </form>
          </div>
        </div>

        <div className="bid clearfix">
          <Link to="#" className="photo"><img alt="" src={ava53x53} /></Link>
          <div className="first-line">
            <Link to="#" className="name">Владимир Владимирович Бондарчук</Link>
            <span className="status online">online</span>
          </div>
          <span className="date">29.10.2013</span>
          <div className="text">
            <Link to="#">В ходе валового анализа пространственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.</Link>
          </div>
          <div className="completive">
            <Link className="response" to="#">Ответы (5)</Link>
            <Link className="response" to="#">Прочие юридические вопосы</Link>
          </div>
        </div>

      </div>
      <Pagination />
    </ PageLayout>
  )
}

export default MyConsultationListPage
