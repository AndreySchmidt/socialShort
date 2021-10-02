import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../PageLayout/PageLayout'
import Pagination from './../components/Pagination/Pagination'

import './../components/css/ad_list_page.css'
import './people_list.css'

const ReviewListPage = () => {
  return (
    <PageLayout>
      <div className="c_ad_search_section">
        <form method="GET" action="#">
          <div className="search_form_wrapper">
            <div className="search_first_line">
              <input type="text" placeholder="Например, кинофестиваль" className="c_form_input full_width" />
            </div>
            <div className="form_line district">
              <div className="caption">
                <label>Район:</label>
              </div>
              <div className="elements">
                <Link to="/">Выбрать районы</Link>
                <div className="selected_districts">Гатчина и Гатчинский район, Волосово и Волосовский район</div>
              </div>
            </div>
            <div className="form_line district">
              <div className="caption">
                <label>Категории:</label>
              </div>
              <div className="elements">
                <Link to="/">Выбрать</Link>
                <div className="">Выставки / конференции</div>
              </div>
            </div>
            <div className="form_line">
              <div className="caption">
                <label>Дата проведения:</label>
              </div>
              <div className="elements">
                <input type="text" name="" placeholder="ДД.ММ.ГГ" className="c_form_input" /> &mdash;
                <input type="text" name="" placeholder="ДД.ММ.ГГ" className="c_form_input" />
              </div>
            </div>
            <div className="form_line">
              <div className="caption">
                <label>Статус:</label>
              </div>
              <div className="elements">
                <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" checked="" /> <span>Не важно</span></label>
                <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>Текущие</span></label>
                <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>Грядущие</span></label>
                <label className="c_form_checkbox"><input type="checkbox" name="" /> <span>Завершенные</span></label>
              </div>
            </div>
            <div className="form_line">
              <div className="caption">
                <label>С отчетами:</label>
              </div>
              <div className="elements">
                <label className="c_form_checkbox with_sizing"><input type="checkbox" name="" /> <span>С фото отчетом</span></label>
                <label className="c_form_checkbox"><input type="checkbox" name="" /> <span>С видео отчетом</span></label>
              </div>
            </div>
            <div className="form_line">
              <div className="elements">
                <div className="c_search_button">
                  <input type="submit" className="c_button" value="НАЙТИ" />
                </div>
              </div>
            </div>
            <div className="full_data hide_full">
              <Link to="/"><i></i>Свернуть расширенные параметры<i></i></Link>
            </div>
          </div>
        </form>
      </div>
      <Pagination />

      <div className="c_people_list clearfix">
        <div className="person">
          <Link className="photo" to="#"><img src="images/pic-ava-100x100.jpg" alt="" /></Link>
          <div className="first-line">
            <Link className="name" to="#">Елизавета Владимировна Бондарчук</Link>
            <span className="status offline">offline</span>
          </div>
          <div className="gray-line">
            29 лет, Лодейное поле и Лодейнопольск р-н
          </div>
          <div className="dd">
            <span className="distance">~12 000 км</span> от тебя
          </div>
          <div className="actions">
            <Link to="#" className="write">Написать сообщение</Link>
            <Link to="#" className="add">Добавить в друзья</Link>
          </div>
        </div>
        <div className="person">
          <Link className="photo" to="#"><img src="images/pic-ava-100x100.jpg" alt="" /></Link>
          <div className="first-line">
            <Link className="name" to="#">Елизавета Бондарчук</Link>
            <span className="status online">online</span>
          </div>
          <div className="gray-line">
            29 лет, Лодейное поле и Лодейнопольск р-н
          </div>
          <div className="dd">
            <span className="distance">~12 000 км</span> от тебя
          </div>
          <div className="actions">
            <Link to="#" className="write">Написать сообщение</Link>
            <Link to="#" className="add">Добавить в друзья</Link>
          </div>
        </div>
        <div className="person">
          <Link className="photo" to="#"><img src="images/pic-ava-100x100.jpg" alt="" /></Link>
          <div className="first-line">
            <Link className="name" to="#">Елизавета Бондарчук</Link>
            <span className="status online">online</span>
          </div>
          <div className="gray-line">
            29 лет, Лодейное поле и Лодейнопольск р-н
          </div>
          <div className="dd">
            <span className="distance">~12 000 км</span> от тебя
          </div>
          <div className="actions">
            <Link to="#" className="write">Написать сообщение</Link>
            <Link to="#" className="add">Добавить в друзья</Link>
          </div>
        </div>
      </div>
      <Pagination />
    </PageLayout>
  )
}

export default ReviewListPage
