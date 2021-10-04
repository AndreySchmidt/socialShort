import React from 'react'
import {Link} from 'react-router-dom'

import arrowblackleft from './../../../../img/arrow-black-left.png'
import arrowblackright from './../../../../img/arrow-black-right.png'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'
import QuickSearch from './../../components/QuickSearch/QuickSearch'

import './PlanPage.css'
import './plan_dock.css'
import './../../components/css/lk_user_data.css'

const PlanPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="#">Добавить событие</Link> Планировщик
      </div>

      <div className="c_settings_layout clearfix">
        <div className="c_lk_schedule_dock setting_sections_block">
          <div className="section_title">Календарь</div>

          <div className="form_line">
            <Link className="prev" to="#" title="Предыдущий"><img src={arrowblackleft} alt="" /></Link>
            <select className="month">
              <option>Январь</option>
            </select>
            <select className="year">
              <option>2014</option>
            </select>
            <Link className="next" to="#" title="Следующий"><img src={arrowblackright} alt="" /></Link>
          </div>

          <table>
            <thead>
              <tr>
                <td>пн</td>
                <td>вт</td>
                <td>ср</td>
                <td>чт</td>
                <td>пт</td>
                <td className="holiday">сб</td>
                <td className="holiday">вс</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="holiday"><Link to="#">1</Link></td>
                <td className="holiday"><Link to="#">2</Link></td>
              </tr>
              <tr>
                <td><Link to="#">3</Link></td>
                <td><Link to="#">4</Link></td>
                <td><Link to="#">5</Link></td>
                <td><Link to="#">6</Link></td>
                <td><Link to="#">7</Link></td>
                <td className="holiday"><Link to="#">8</Link></td>
                <td className="holiday"><Link to="#">9</Link></td>
              </tr>
              <tr>
                <td><Link to="#">24</Link></td>
                <td><Link className="today" to="#">25</Link></td>
                <td><Link to="#">26</Link></td>
                <td><Link to="#">27</Link></td>
                <td><Link to="#">28</Link></td>
                <td className="holiday"><Link className="current" to="#">29</Link></td>
                <td className="holiday"><Link to="#">30</Link></td>
              </tr>
              <tr>
                <td><Link to="#">31</Link></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="holiday"> </td>
                <td className="holiday"> </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="layout_inner">
          <div className="layout_inner_space">
            <div className="c_lk_schedule">

              <div className="c_type_select">
                <Link to="#" className="active">Все</Link>
                <Link to="#">Текущие</Link>
                <Link to="#">Завершенные</Link>
                <Link to="#">Предстоящие</Link>
                <Link to="#">Просроченные</Link>
              </div>

              <QuickSearch placeholder="Быстрый поиск" />

              <h2 className="title">Список событий</h2>
              <p className="info hidden">У Вас еще не создано ниодного события</p>
              <h3 className="caption_day">25 января 2014 года</h3>

              <div className="event clearfix">
                <div className="leftside">
                  <strong className="time">18:00</strong>
                  <span className="remind">(напомнить: <span>за час</span>)</span>
                </div>
                <div className="rightside">
                  <Link className="control delete" to="#" title="Удалить">Удалить</Link>
                  <Link className="control edit" to="#" title="Редактировать">Редактировать</Link>
                  <Link className="control complite" to="#" title="Завершить">Завершить</Link>
                </div>
                <span className="text">Купить продуткы</span>
              </div>

              <div className="event clearfix">
                <div className="leftside">
                  <strong className="time">18:00</strong>
                  <span className="remind">(напомнить: <span>за 5 часов</span>)</span>
                </div>
                <div className="rightside">
                  <Link className="control delete" to="#" title="Удалить">Удалить</Link>
                  <Link className="control edit" to="#" title="Редактировать">Редактировать</Link>
                </div>
                <span className="text done">Пример завершенного задания</span>
              </div>

              <h3 className="caption_day">26 января 2014 года</h3>
              <div className="event clearfix">
                <div className="leftside">
                  <strong className="time">18:00</strong>
                  <span className="remind">(напомнить: <span>за 5 часов</span>)</span>
                </div>
                <div className="rightside">
                  <Link className="control delete" to="#" title="Удалить">Удалить</Link>
                  <Link className="control edit" to="#" title="Редактировать">Редактировать</Link>
                  <Link className="control complite" to="#" title="Завершить">Завершить</Link>
                </div>
                <span className="text">Связаться с Петром Николаевичем насчет организации встречи</span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </PageLayout>
  )
}

export default PlanPage
