import React from 'react'
import {Link} from 'react-router-dom'

const ShortBlogItem = () => {
  return (
    <div className="list_item">
      <div className="header"><Link to="">Диагностика и ремонт кофемашин Siemens</Link></div>
      <div className="text">
        Совершенствовании кофемашин, Siemens поражает своими инновациями самых требовательных
        пользователей. Но, если справиться с управлением...
      </div>
      <div className="after-content">
        <span className="date">21.02.2013</span>
        <Link to="">Общество</Link>
        <Link to="">13 комментариев</Link>
      </div>
    </div>
  )
}

export default ShortBlogItem
