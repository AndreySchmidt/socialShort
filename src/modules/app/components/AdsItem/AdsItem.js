import React from 'react'
import {Link} from 'react-router-dom'

import adsimage from './../../../../images/ads-image.jpg'

const AdsItem = () => {
  return (
    <div className="list_item">
      <div className="title"><Link to="">Заголовок рекламного объявления </Link></div>
      <div className="image"><Link to=""><img src={adsimage} alt="" /></Link></div>
      <div className="text">Краткий текст рекламного объявления</div>
    </div>
  )
}

export default AdsItem
