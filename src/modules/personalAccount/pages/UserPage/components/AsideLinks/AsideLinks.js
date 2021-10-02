import React from 'react'
import {Link} from 'react-router-dom'

const AsideLinks = () => {
  return (
    <div className="c_aside_links">
      <Link to="">Изменить&nbsp;фотографию</Link><br />
      <Link to="">Редактировать&nbsp;анкету</Link>
    </div>
  )
}

export default AsideLinks
