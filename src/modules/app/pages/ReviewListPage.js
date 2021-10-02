import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../PageLayout/PageLayout'
import Pagination from './../components/Pagination/Pagination'

import './../components/css/ad_list_page.css'
import './otziv_list.css'
import './otziv_filter.css'


const ReviewListPage = () => {
  return (
    <PageLayout>
      <h1 className="grandHeader">Отзывы</h1>
      <div className="c_otziv_list">
        <div className="c_otziv_filter clearfix">
          <div className="c_type_select filter-sort">
            <Link to="" className="active">По популярности</Link>
            <Link to="">По дате добавления</Link>
          </div>
          <div className="c_type_select">
            <Link to="" className="active">Все</Link>
            <Link to="">Организации</Link>
            <Link to="">Товары / услуги</Link>
          </div>
          </div>
          <Pagination />
          <div className="comment-target">
            <h4 className="title"><Link to="">Ижора-Строй. Материалы и оборудование с доставкой по России</Link></h4>
            <div className="right_block">
              <div className="c_add_to_list_button">
                <Link to="/" className="button_element">
                  <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
                </Link>
                <div className="list-hover-wrapper">
                  <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                </div>
              </div>
            </div>
            <div className="contacts_section">
              <span className="phone">+7 (921) 344-56-77</span>
              <Link className="mail" to="mailto:company@yandex.ru">company@yandex.ru</Link>
              <Link className="site" to="">www.company-site.ru</Link>
            </div>
            <div className="bottom_link">
              <Link to="">Скидки и акции (3)</Link>
              <Link to="">Отзывы (4)</Link>
              <Link to="">Товары (34)</Link>
              <Link to="">Новости</Link>
              <Link to="">Фото </Link>
              <Link to="">Видео</Link>
            </div>
            <div className="comment-corner"></div>
          </div>
          <div className="comment clearfix">
            <img className="user-avatar" src="images/wall-avatar-1.jpg" alt="" />
            <Link className="name" to="">Павел Кравцов</Link> <span className="date" title="Добавлено: 29.10.2013">29.10.2013</span>
            <div className="text">Раньше ученые полагали, что трехкомпонентное образование распознает диэтиловый эфир, однако между карбоксильной группой и аминогруппой может возникнуть солевой мостик.</div>
          </div>
          <div className="comment-target goods">
            <h4 className="title"><Link to="">Наматрасник "Стебель бамбука" 160x200.</Link></h4>
            <div className="right_block">
              <div className="c_add_to_list_button">
                <Link className="button_element added" to="/">
                  <img alt="" src="img/icon-ok.png" className="icon_ok" /> <span>В моем списке</span>
                </Link>
                <div className="list-hover-wrapper">
                  <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                </div>
              </div>
            </div>
            <div className="price">
              Цена: <strong>1 300 руб.</strong>
              <Link className="remove_from_cart" to="">Удалить из корзины</Link>
            </div>
            <div className="comment-corner"></div>
          </div>
          <div className="comment clearfix">
            <img className="user-avatar" src="images/wall-avatar-1.jpg" alt="" />
            <Link className="name" to="">Павел Кравцов</Link> <span className="date">2.05.2013</span>
            <div className="text">Полоса поглощения гомологична. Комплекс-аддукт взвешивает рацемический сахар, как и предсказывает основной постулат квантовой химии.</div>
          </div>
          <div className="comment-target goods">
            <h4 className="title"><Link to="">Наматрасник "Стебель бамбука" 160x200.</Link></h4>
            <div className="right_block">
              <div className="c_add_to_list_button">
                <Link to="/" className="button_element">
                  <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
                </Link>
                <div className="list-hover-wrapper">
                  <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
                </div>
              </div>
            </div>
            <div className="price">
              Цена: <strong>1 300 руб.</strong>
            </div>
            <div className="comment-corner"></div>
          </div>
          <div className="comment clearfix">
            <img className="user-avatar" src="images/wall-avatar-1.jpg" alt="" />
            <Link className="name" to="">Павел Кравцов</Link> <span className="date">2.05.2013</span>
            <div className="text">Окисление химически полимеризует органический гомолог, тем самым открывая возможность. Раньше ученые полагали, что трехкомпонентное образование распознает диэтиловый эфир, однако между карбоксильной группой и аминогруппой может возникнуть солевой мостик.</div>
          </div>
      </div>
      <Pagination />
    </PageLayout>
  )
}

export default ReviewListPage
