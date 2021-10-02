import React from 'react'
import {Link} from 'react-router-dom'

const InfoBlock = () => {
  return (
    <div className="c_info_block">
      <Link className="close_button"  to=""></Link>
      <div className="text_line">Добро пожаловать</div>
      <div className="text_line">пример ссылки <Link to="">Link</Link> Link</div>
      <div className="text_line"><strong>а это полужирный текст</strong></div>
    </div>
  )
}

export default InfoBlock
