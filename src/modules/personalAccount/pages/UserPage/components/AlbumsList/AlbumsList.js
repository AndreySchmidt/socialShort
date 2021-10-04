import React from 'react'
import {Link} from 'react-router-dom'

import album1 from './../../../../../../images/album-1.jpg'
import album2 from './../../../../../../images/album-2.jpg'

const AlbumsList = () => {
  return (
    <div className="c_albums_list">
      <div className="list_item">
        <div className="image_container">
            <Link to=""><img src={album1} alt="" /></Link>
        </div>
        <div className="title">
            <Link to="">Название альбома</Link>
        </div>
      </div>
      <div className="list_item">
        <div className="image_container">
            <Link to=""><img src={album2} alt="" /></Link>
        </div>
        <div className="title">
            <Link to="">Длинное название данного фотоальбома</Link>
        </div>
      </div>
    </div>
  )
}

export default AlbumsList
