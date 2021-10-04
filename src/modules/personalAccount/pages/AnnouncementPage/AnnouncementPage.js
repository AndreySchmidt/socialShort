import React from 'react'
import {Link} from 'react-router-dom'

import pic1 from './../../../../images/pic-1.jpg'

import PageLayout from './../../PageLayout/PageLayout'

import Pagination from './../../../app/components/Pagination/Pagination'
import QuickSearch from './../../components/QuickSearch/QuickSearch'

import './AnnouncementPage.css'
import './announcement_controls.css'
import './../../components/css/lk_user_data.css'
import './../../../app/components/css/ad_list_page.css'

const AnnouncementPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="/user/15/edit_user_data/main">Добавить объявление</Link> Мои объявления
      </div>

      <div className="c_settings_layout clearfix">
        <div className="setting_sections_block">
          <div className="section_title">Фильтры поиска</div>

          <div className="section_link active"><Link to="#">Все записи</Link></div>
          <div className="section_link"><Link to="#">Недвижимость</Link></div>
          <div className="section_link"><Link to="#">Доска объявлений</Link></div>
          <div className="section_link"><Link to="#">Вакансии</Link></div>
          <div className="section_link"><Link to="#">Резюме</Link></div>
        </div>

        <div className="layout_inner">
          <div className="layout_inner_space">

            <div className="c_type_select">
              <Link className="active" to="#">Активные</Link>
              <Link to="#">Завершенные</Link>
            </div>
            <QuickSearch placeholder="Быстрый поиск" />

            <div className="c_announcement_item withpicture clearfix">
              <div className="pic_container">
                <Link to="#"><img src={pic1} alt="" /></Link>
              </div>
              <h4 className="title"><Link to="#">2-к квартира, 53м, 1/12 эт.</Link></h4>
              <div>1 955 000 руб.</div>
              <div>Агенство</div>
              <div className="date">Добавлено: 21.02.2013</div>
            </div>

            <div className="c_announcement_controls">
              <Link className="edit" to="">Редактировать</Link>
              <Link className="remove" to="">Снять с публикации</Link>

              <div className="submenu">
                <Link className="more" to="">Еще</Link>
                <div className="extended_menu_shadow">
                  <ul className="options_list">
                    <li className="vip"><Link to="">Сделать VIP</Link></li>
                    <li className="pin"><Link to="">Закрепить объявление</Link></li>
                    <li className="emp"><Link to="">Выделить цветом</Link></li>
                    <li className="lift last"><Link to="">Поднять объявление в поиске</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="dot-separator-3c3c3c"></div>

            <div className="c_announcement_item withpicture clearfix">
              <div className="pic_container">
                <Link to="#"><img src={pic1} alt="" /></Link>
              </div>
              <h4 className="title"><Link to="#">Колеса в сборе ВАЗ 2107 на литых дисках R13</Link></h4>
              <div>12 000 руб.</div>
              <div className="empty_row">&nbsp;</div>
              <div className="date">Добавлено: 21.02.2013</div>
            </div>

            <div className="dot-separator-3c3c3c"></div>

            <div className="c_announcement_item clearfix">
              <div className="pic_container">
                <Link to="#"><img src={pic1} alt="" /></Link>
              </div>
              <h4 className="title"><Link to="#">Резюме/вакансии</Link></h4>
              <div>55 000 руб.</div>
              <div>опыт работы умеренный, рабочий график стойкий, праздники мы любим</div>
              <div className="date">Добавлено: 21.02.2013</div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <Pagination />
    </PageLayout>
  )
}

export default AnnouncementPage
