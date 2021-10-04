import React from 'react'
import {Link} from 'react-router-dom'

import picava100x100 from './../../../../images/pic-ava-100x100.jpg'

import './lk_friends_dock.css'
import './FriendPage.css'
import './../../components/css/lk_user_data.css'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'
import QuickSearch from './../../components/QuickSearch/QuickSearch'

const FriendPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="#">Найти друзей</Link>
        <Link className="c_button_large link_right" to="#">Пригласить друга</Link> Мои друзья
      </div>

      <div className="c_settings_layout clearfix">
        <div className="c_lk_friends_dock setting_sections_block">

          <div className="section_title">Фильтры поиска</div>

          <div className="form_line">
            <label>Район</label><br />
            <select className="c_form_input">
              <option>Выбрать район</option>
            </select>
          </div>

          <div className="form_line">
            <label>Возраст</label><br />
            <select className="c_form_input width-third">
              <option>от</option>
            </select>
            <span className="mdash">&mdash;</span>
            <select className="c_form_input width-third">
              <option>до</option>
            </select>
          </div>

          <div className="form_line">
            <label className="element">Пол</label>
          </div>
          <div className="form_line">
            <label className="element"><input type="radio" name="gender[]" /> Не важно</label>
          </div>
          <div className="form_line">
            <label className="element"><input type="radio" name="gender[]" /> Мужской</label>
          </div>
          <div className="form_line">
            <label className="element"><input type="radio" name="gender[]" /> Женский</label>
          </div>

          <div className="dot-separator-3c3c3c"></div>
          <div className="section_link active"><Link to="#">Все друзья</Link></div>
          <div className="section_link"><Link to="#">Телефонные номера</Link></div>
          <div className="section_link"><Link to="#">Электронная почта</Link></div>
        </div>

          <div className="layout_inner">
            <div className="layout_inner_space">
            <div className="c_lk_friends">

              <h2 className="title">У Вас 300 друзей</h2>
              <div className="c_type_select">
                <Link to="#" className="active">Все друзья</Link>
                <Link to="#">Друзья онлайн</Link>
                <Link to="#">Заявки в друзья (4)</Link>
              </div>
              <QuickSearch placeholder="Начните набирать имя друга" />
              <p className="info hidden">У Вас пока еще нет друзей</p>

              <div className="friend clearfix">
                <div className="rightside">
                  <Link className="write" to="#">Написать сообщение</Link>
                  <Link className="delete" to="#">Убрать из друзей</Link>
                  <Link className="fave-add" to="#">Добавить в избранное</Link>
                  <Link className="fave-del" to="#">Удалить из избранного</Link>
                </div>

                <Link to="#" className="photo"><img alt="Елизавета Владимировна" title="Елизавета Владимировна" src={picava100x100} /></Link>
                <Link to="#" className="name">Елизавета Владимировна Бондарчук</Link><br />
                <span className="status online">online</span>
              </div>

              <div className="friend clearfix">
                <div className="rightside">
                  <Link className="write" to="#">Написать сообщение</Link>
                  <Link className="delete" to="#">Убрать из друзей</Link>
                  <Link className="fave-add" to="#">Добавить в избранное</Link>
                  <Link className="fave-del" to="#">Удалить из избранного</Link>
                </div>

                <Link to="#" className="photo"><img alt="Елизавета Владимировна" title="Елизавета Владимировна" src={picava100x100} /></Link>
                <Link to="#" className="name">Елизавета Владимировна</Link><br />
                <span className="status offline">offline</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    <Pagination />
    </PageLayout>
  )
}
export default FriendPage
