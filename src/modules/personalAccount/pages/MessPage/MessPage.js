import React from 'react'
import {Link} from 'react-router-dom'

import imava from './../../../app/AppPageLayout/images/im-ava.jpg'

import PageLayout from './../../PageLayout/PageLayout'

// import './MessPage.css'
import './lk_im.css'
import './lk_im_contacts.css'
import './lk_im_form.css'
import './lk_im_messages.css'
import './lk_im_popup.css'
import './../../components/css/lk_user_data.css'


const MessPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="">Написать сообщение</Link> Сообщения
      </div>

      <div className="c_lk_im clearfix">
      <div className="c_lk_im_contacts">

        <div className="inline_search">
          <form method="GET" action="#">
            <div className="search_form">
              <input className="search_query" type="text" placeholder="Начните набирать имя друга" />
              <input className="search_reset" type="reset" value="Очистить" title="Очистить" />
              <input className="search_submit hidden" type="submit" value="Найти" />
            </div>
          </form>
        </div>

        <div className="contact-list">

          <p className="info hidden">У Вас пока еще нет собеседников</p>
          <div className="contact clearfix">
            <div className="inner">
              <img className="ava" src={imava} alt="" />
              <span className="name">Анастасия Ковальчук</span>
              <Link className="delete" to="#" title="Закрыть диалог">Удалить</Link>
              <p className="msg">Длинное сообщение обрезается автоматом</p>
              <span className="date">12.03.2010</span>
            </div>
          </div>
          <div className="contact new clearfix">
            <div className="inner">
              <img className="ava" src={imava} alt="" />
              <span className="name">Анастасия Ковальчук</span>
              <Link className="delete" to="#" title="Закрыть диалог">Удалить</Link>
              <p className="msg">Привет как дела ?</p>
              <span className="date">12.03.2010</span>
            </div>
          </div>
          <div className="contact selected clearfix">
            <div className="inner">
              <img className="ava" src={imava} alt="" />
              <span className="name">Анастасия Ковальчук</span>
              <Link className="delete" to="#" title="Закрыть диалог">Удалить</Link>
              <p className="msg">Привет как дела ?</p>
              <span className="date">12.03.2010</span>
            </div>
          </div>

        </div>
      </div>

      <div className="c_lk_im_messages">
        <div className="message-list">
          <p className="info hidden"><span>Выберите собеседника</span></p>

          <div className="message">
            <div className="inner clearfix">
              <img className="ava" src={imava} alt="" />
              <span className="date">12.03.2010</span>
              <p className="msg">Привет как дела ?</p>
            </div>
          </div>
          <div className="message">
            <div className="inner clearfix">
              <img className="ava" src={imava} alt="" />
              <span className="date">12.03.2010</span>
              <p className="msg">Привет как дела ? Привет как дела ? Привет как дела ? Привет как дела ? Привет как дела ? Привет как дела ? Привет как дела ? Привет как дела ?Привет как дела ? Привет как дела ? Привет как дела ? Привет как дела ? м Привет как дела ? Привет как дела ? м м м мv Привет как дела ? v Привет как дела ?Привет как дела ? v Привет как дела ? Привет как дела ? Привет как дела ?Привет как дела ?Привет как дела ? Привет как дела ?</p>
            </div>
          </div>
          <div className="message new">
            <div className="inner clearfix">
              <img className="ava" src={imava} alt="" />
              <span className="date">12.03.2010</span>
              <p className="msg">Новое сообщение</p>
            </div>
          </div>
        </div>

        <div className="c_lk_im_form">
          <form action="#" className="">
            <div>
              <textarea className="field" placeholder="Введите текст Вашего сообщения"></textarea>
              <input className="c_button_large submit" type="submit" value="Отправить" />
              <div className="attach">Прикрепить к сообщению
                <div className="extended_menu">
                  <ul className="attachs_list">
                    <li><Link to="">Фотография</Link></li>
                    <li><Link to="">Видеозапись</Link></li>
                    <li className="last"><Link to="">Документ</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default MessPage
