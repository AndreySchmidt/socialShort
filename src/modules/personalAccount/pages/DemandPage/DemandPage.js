import React from 'react'
import {Link} from 'react-router-dom'

import './lk_bid_list.css'
import './../../components/css/c_bid_controls.css'
import './../../components/css/c_bid_filter.css'
import './../../components/css/lk_user_data.css'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'
import QuickSearch from './../../components/QuickSearch/QuickSearch'

const DemandPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="#">Добавить заявку</Link> Заявки на товары / услуги
      </div>

      <div className="c_lk_bid_list">

        <div className="c_bid_filter">
          <div className="c_type_select">
            <Link to="#" className="active">Все заявки</Link>
            <Link to="#">Открытые</Link>
            <Link to="#">Закрытые</Link>
            <Link to="#">Полученные ответы на заявки (4)</Link>
          </div>
          <QuickSearch placeholder="Быстрый поиск" />
        </div>


        <div className="bid clearfix">
          <h3 className="title">Заглавие публикации</h3>
          <div className="text">
            В ходе валового анализа пространственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.
          </div>
          <div className="completive">
            <span className="date">Добавлено: 29.10.2013</span>
            <Link className="response" to="#">5 ответов</Link>
            Бюджет: <strong className="blue">По договоренности</strong>
          </div>
          <div className="c_bid_controls">
            <Link to="" className="edit">Редактировать</Link>
            <Link to="" className="close last">Закрыть</Link>
          </div>
        </div>

        <div className="bid clearfix gray">
          <h3 className="title">Заглавие публикации</h3>
          <div className="text">
            В ходе валового анализа пространственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.
          </div>
          <div className="completive">
            <span className="date">Добавлено: 29.10.2013</span>
            <Link className="response" to="#">5 ответов</Link>
            Бюджет: <strong className="blue">По договоренности</strong>
          </div>
          <div className="c_bid_controls">
            <Link to="" className="edit">Редактировать</Link>
            <Link to="" className="close last">Закрыть</Link>
          </div>
        </div>

        <div className="bid clearfix">
          <h3 className="title">Заглавие публикации</h3>
          <div className="text">
            В ходе валового анализа пространственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.
          </div>
          <div className="completive">
            <span className="date">Добавлено: 29.10.2013</span>
            <Link className="response" to="#">5 ответов</Link>
            Бюджет: <strong className="blue">По договоренности</strong>
          </div>
          <div className="c_bid_controls">
            <Link to="" className="edit">Редактировать</Link>
            <Link to="" className="close last">Закрыть</Link>
          </div>
        </div>

      </div>
      <Pagination />
    </PageLayout>
  )
}

export default DemandPage
