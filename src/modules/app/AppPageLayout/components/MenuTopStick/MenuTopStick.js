import React from 'react'
import {Link} from 'react-router-dom'

const MenuTopStick = () => {
  return(
    <div className="c_menu_top_stick clearfix">
      <ul className="menu_right">
        <li><Link to="/me">Личный кабинет</Link></li>
        <li className="separator">|</li>
        <li><Link to="/exit">Выход</Link></li>
      </ul>
    </div>
  )
}
export default MenuTopStick
