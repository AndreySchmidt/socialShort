import React from 'react'
import {Link} from 'react-router-dom'

const MenuTop = () => {
  return(
    <div className="c_menu_top">
      <ul>
        <li><Link to="/news">Новости</Link></li>
        <li className="active"><Link to="/people">Люди</Link></li>
        <li><Link to="/blogs">Блоги</Link></li>
        <li><Link to="/consultations">Консультации</Link></li>
        <li><Link to="/advertisements">Доска объявлений</Link></li>
      </ul>
    </div>
  )
}

export default MenuTop
