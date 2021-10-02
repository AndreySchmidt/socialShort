import React from 'react'
import {Link} from 'react-router-dom'
import AdsItem from './../AdsItem/AdsItem'

const AdsList = () => {
  return (
    <div className="c_ads_list">
      <div className="header">Обратите внимание <i></i></div>
        <div className="ads_list">
          <AdsItem />
        </div>
        <div className="question_how_to"><Link to="">Как сюда попасть?</Link></div>
    </div>
  )
}


export default AdsList
