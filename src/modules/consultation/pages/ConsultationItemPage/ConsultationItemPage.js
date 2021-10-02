import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'

import './../../../app/components/css/ad_list_page.css'
import './../../../app/components/css/breadcrumbs_bar.css'
import './consultations_answer.css'
import './consultation_answer_form.css'
// import './bid_controls.css'

const ConsultationItemPage = () => {
  return (
    <PageLayout>
      <div className="c_breadcrumbs_bar">
        <Link to="#" className="back">Назад</Link>
        <div className="breadcrumbs">
          <Link to="#">Консультации</Link>
          <span className="separator">&gt;</span>
          <Link to="#">Название категории</Link>
        </div>
        </div>
        <div className="c_consultations_answer">
          <div className="bid clearfix">
            <Link to="#" className="photo"><img alt="" src="images/pic-ava-100x100.jpg" /></Link>
            <div className="first-line">
              <Link to="#" className="name">Владимир Владимирович Бондарчук</Link>
              <span className="status online">online</span>
            </div>
            <span className="date">29.10.2013</span>
            <h4 className="title">В ходе валового анализа пространственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.</h4>
            <div className="text">
              Приглядевшись, он заметил снаряд времен Великой Отечественной войны, через пару мновений были обнаружены еще  пару снарядов. Чтобы опасные находки не попались на глаза гуляющим детям, смельчак самостоятельно доставил все в Сиверское отделение полиции. В близжайшее время сотрудники военкомата вывезут и уничтожат снаряды.
            </div>
            <div className="vote">
              <strong className="blue">Голосовать за вопрос:&nbsp;</strong>
              <Link to=""><img src="img/thumb-up.png" alt="" /></Link>
              <strong className="rating">+50</strong>
              <Link to=""><img src="img/thumb-down.png" alt="" /></Link>
            </div>
            <div className="question_controls">
              <div className="social_links">
                <strong>Поделиться:&nbsp;&nbsp;</strong>
                <Link to="#"><img src="images/social-sample-small.png" alt="" /></Link>
              </div>
              <Link className="edit" to="">Редактировать</Link>
              <Link className="report" to="">Пожаловаться</Link>
            </div>
            <form action="#" className="c_consultation_answer_form">
            <div>
              <textarea className="field"></textarea>
              <input className="c_button_large submit" type="submit" value="Ответить" />
            </div>
            </form>
          </div>
          <div className="bid clearfix">
            <Link to="#" className="photo"><img alt="" src="images/pic-ava-100x100.jpg" /></Link>
            <div className="first-line">
              <Link to="#" className="name">Владимир Владимирович Бондарчук</Link>
              <span className="status online">online</span>
            </div>
            <span className="date">29.10.2013</span>
            <div className="text">
              Да
            </div>
            <div className="answer_controls">
              <Link className="report" to="">Пожаловаться</Link>
              <div className="vote">
                <strong className="blue">Голосовать за ответ:&nbsp;</strong>
                <Link to=""><img src="img/thumb-up.png" alt="" /></Link>
                <strong className="rating">+50</strong>
                <Link to=""><img src="img/thumb-down.png" alt="" /></Link>
              </div>
            </div>
          </div>
          <div className="bid clearfix">
            <Link to="#" className="photo"><img alt="" src="images/pic-ava-100x100.jpg" /></Link>
            <div className="first-line">
              <Link to="#" className="name">Владимир Владимирович Бондарчук</Link>
              <span className="status online">online</span>
            </div>
            <span className="date">29.10.2013</span>
            <div className="text">
              Приглядевшись, он заметил снаряд времен Великой Отечественной войны, через пару мновений были обнаружены еще  пару снарядов. Чтобы опасные находки не попались на глаза гуляющим детям, смельчак самостоятельно доставил все в Сиверское отделение полиции. В близжайшее время сотрудники военкомата вывезут и уничтожат снаряды.
            </div>
            <div className="answer_controls">
              <Link className="report" to="">Пожаловаться</Link>
              <div className="vote">
                <strong className="blue">Голосовать за ответ:&nbsp;</strong>
                <Link to=""><img src="img/thumb-up.png" alt="" /></Link>
                <strong className="rating">+50</strong>
                <Link to=""><img src="img/thumb-down.png" alt="" /></Link>
              </div>
            </div>
          </div>
        </div>
      <Pagination />
    </PageLayout>
  )
}

export default ConsultationItemPage
