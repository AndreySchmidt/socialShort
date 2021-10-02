import React from 'react'
import {Link} from 'react-router-dom'

const MenuTopStick = () => {
  return(
    <div className="c_menu_top_stick clearfix">
      <ul className="menu_left">
        <li className="parent">
          <Link to="">Справочник <i className="more-arrow"></i></Link>
          <ul>
              <li><Link to="/map">Места на карте</Link></li>
              <li><Link to="/traffic">Пробки на дорогах</Link></li>
              <li><Link to="/weather">Погода</Link></li>
              <li><Link to="/schedule/bus">Расписание автобусов</Link></li>
              <li><Link to="/schedule/train">Расписание поездов</Link></li>
              <li><Link to="/schedule/flight">Расписание самолетов</Link></li>
              <li><Link to="/emergency_services">Экстренные службы</Link></li>
              <li><Link to="/settlement_administrations">Администрации поселений</Link></li>
          </ul>
        </li>
        <li className="parent">
          <Link to="">Общение <i className="more-arrow"></i></Link>
          <ul>
              <li><Link to="/people">Люди</Link></li>
              <li><Link to="/consultation">Консультации</Link></li>
              <li><Link to="/blogs">Блоги</Link></li>
              <li><Link to="/dating">Знакомства</Link></li>
          </ul>
        </li>
        <li><Link to="/discount">Скидки и акции</Link></li>
        <li><Link to="/events">Мероприятия</Link></li>
        <li><Link to="/news">Новости</Link></li>
        <li className="parent">
          <Link to="">Еще <i className="more-arrow"></i></Link>
          <ul>
              <li><Link to="/discoveries">Бюро находок</Link></li>
              <li><Link to="/review">Отзывы</Link></li>
              <li><Link to="/photo">Фото</Link></li>
              <li><Link to="/video">Видео</Link></li>
              <li><Link to="/game">Игры</Link></li>
          </ul>
        </li>
      </ul>
      <ul className="menu_right">
          <li><Link to="/me">Личный кабинет</Link></li>
          <li className="separator">|</li>
          <li><Link to="/exit">Выход</Link></li>
      </ul>
    </div>
  )
}
export default MenuTopStick
