import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'
import QuickSearch from './../../components/QuickSearch/QuickSearch'

import picava100x100 from './../../../app/AppPageLayout/images/pic-ava-100x100.jpg'

import './FavoritePage.css'
import './../../components/css/lk_user_data.css'
import './../../components/css/c_lk_friends_dock.css'

const FavoritePage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">Избранное</div>

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
                <label className="element"><input type="radio" name="gender[]" checked="checked" /> Не важно</label>
            </div>
            <div className="form_line">
                <label className="element"><input type="radio" name="gender[]" /> Мужской</label>
            </div>
            <div className="form_line">
                <label className="element"><input type="radio" name="gender[]" /> Женский</label>
            </div>

            <div className="dot-separator-3c3c3c"></div>
            <div className="section_link active"><Link to="#">Все друзья</Link> </div>
            <div className="section_link"><Link to="#">Телефонные номера</Link> </div>
            <div className="section_link"><Link to="#">Электронная почта</Link> </div>
          </div>

          <div className="layout_inner">
            <div className="layout_inner_space">
            <div className="c_lk_favorites">

              <h2 className="title">У Вас 4 человека в избранном</h2>

              <div className="c_type_select">
                  <Link to="#" className="active">Моё избранное</Link>
                  <Link to="#">Я в избранное</Link>
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
                <Link to="#" className="name">Елизавета Владимировна Бондарчук</Link> <br />
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
                <Link to="#" className="name">Елизавета Владимировна</Link> <br />
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

export default FavoritePage
