import React from 'react'
import {Link} from 'react-router-dom'

const HeaderSection = () => {
  return (
    <div className="c_header_section">
        <div className="links_right">
            <Link to="">Новости</Link>
            <span className="separator">|</span>
            <Link to="">Люди</Link>
        </div>

        <div className="header">
            <span className="name">Анна Иванова</span>
            <span className="status online">online</span>
        </div>

        <div className="short_info">29 лет, Гатчина и Гатчинский район</div>
    </div>
  )
}

export default HeaderSection
