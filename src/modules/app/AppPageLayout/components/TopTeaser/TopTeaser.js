import React from 'react'
import {Link} from 'react-router-dom'

const TopTeaser = () => {
  return(
    <div className="c_top_teaser">
      <ul>
        <li><Link to="">Новости технологий</Link></li>
        <li><Link to="">Народное мнение</Link></li>
        <li><Link to="">Происшествия</Link></li>
        <li><Link to="">Власть</Link></li>
        <li><Link to="">Новое правительство</Link></li>
        <li><Link to="">Еще заголовок</Link></li>
        <li><Link to="">Еще заголовок</Link></li>
        <li><Link to="">Еще заголовок</Link></li>
      </ul>
      <Link className="arrow_left"  to=""></Link>
      <Link className="arrow_right"  to=""></Link>
    </div>
  )
}

export default TopTeaser
