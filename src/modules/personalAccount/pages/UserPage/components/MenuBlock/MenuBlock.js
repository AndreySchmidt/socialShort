import React from 'react'
import {Link} from 'react-router-dom'

const MenuBlock = () => {
  return (
    <>
      <div className="c_menu_block">
        <div className="header">Мой профиль <i></i></div>
        <ul>
          <li><Link className="active" to="/user/15/page">Моя страница</Link></li>
          <li><Link to="/user/15/friend">Мои друзья</Link></li>
          <li><Link to="/user/15/mess">Сообщения</Link></li>
          <li><Link to="/user/15/photo">Фото галерея</Link></li>
          <li><Link to="/user/15/video">Видео галерея</Link></li>
          <li><Link to="/user/15/favorite">Избранное</Link></li>
          <li><Link to="/user/15/coupon">Купоны на скидку</Link></li>
          <li><Link to="/user/15/event">Мероприятия</Link></li>
          <li><Link to="/user/15/doc">Документы</Link></li>
          <li><Link to="/user/15/blog">Мой блог</Link></li>
          <li><Link to="/user/15/edit_profile">Настройки анкеты</Link></li>
          <li><Link to="/user/15/money"><span className="c_menu-orange-block">20 dm</span> Мой счет</Link></li>
        </ul>
      </div>

      <div className="c_menu_block">
        <div className="header">Сервисы <i></i></div>
        <ul>
          <li><Link to="/user/15/my_list">Мой список</Link></li>
          <li><Link to="/user/15/cart">Корзина товаров / услуг</Link></li>
          <li><Link to="/user/15/plan">Планировщик</Link></li>
          <li><Link to="/user/15/calculator">Калькулятор расходов</Link></li>
        </ul>
      </div>

      <div className="c_menu_block">
        <div className="header">Управление <i></i></div>
        <ul>
          <li><Link to="/user/15/company">Мои компании</Link></li>
          <li><Link to="/user/15/announcement">Мои объявления</Link></li>
          <li><Link to="/user/15/demand">Заявки на товары / услуги</Link></li>
          <li><Link to="/user/15/consultation">Участие в консультациях</Link></li>
          <li><Link to="/user/15/response">Мои отзывы</Link></li>
          <li><Link to="/user/15/comment">Мои комментарии</Link></li>
        </ul>
      </div>
    </>
  )
}

export default MenuBlock
