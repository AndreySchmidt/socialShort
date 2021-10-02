import React from 'react'
import {Link} from 'react-router-dom'

const MenuTop = () => {
  return(
    <div className="c_menu_top">
      <ul>
        <li><Link to="/organisations">Организации</Link></li>
        <li><Link to="/real_estates_list">Недвижимость</Link></li>
        <li><Link to="/vacancy_list">Работа</Link></li>
        <li><Link to="/goods_service">Товары и услуги</Link></li>
        <li><Link to="/advertisements">Доска объявлений</Link></li>
        <li><Link to="/demands">Заявки на товары и услуги</Link></li>
      </ul>
    </div>
  )
}

export default MenuTop
