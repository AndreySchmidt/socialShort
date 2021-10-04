import React from 'react'
import {Link} from 'react-router-dom'

import vipimage3 from './../../../../images/vip-image-3.jpg'
import picava100x100 from './../../../../images/pic-ava-100x100.jpg'

import PageLayout from './../../PageLayout/PageLayout'

import './PhotoPage.css'
import './../../components/css/c_albums_container.css'
import './../../components/css/c_photos_container.css'
import './../../components/css/lk_user_data.css'

const PhotoPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="">Загрузить фотографии</Link> Фотогалерея
      </div>

      <div className="c_lk_foto_all">

        <div className="c_albums_container">
          <div className="albums_summary">У Вас 8 альбомов</div>
          <div className="album_row">
            <Link className="album_img_container" to="#"><img src={vipimage3} className="album_img" alt="" /></Link>
            <h4 className="title"><Link to="#" title="">Отделка парной в бане и сауне</Link></h4>
            <div className="total">8 фотографий</div>
            <Link className="edit" to="/user/15/photo_edit">Редактировать</Link>
          </div>
          <div className="album_row">
            <Link className="album_img_container" to="#"><img src={vipimage3} className="album_img" alt="" /></Link>
            <h4 className="title"><Link to="#">Отделка парной в бане и сауне</Link></h4>
            <div className="total">8 фотографий</div>
            <Link className="edit" to="/user/15/photo_edit">Редактировать</Link>
          </div>
          <div className="album_row">
            <Link className="album_img_container" to="#"><img src={vipimage3} className="album_img" alt="" /></Link>
            <h4 className="title"><Link to="#">Отделка парной в бане и сауне</Link></h4>
            <div className="total">8 фотографий</div>
            <Link className="edit" to="/user/15/photo_edit">Редактировать</Link>
          </div>
          <div className="album_row">
            <Link className="album_img_container" to="#"><img src={vipimage3} className="album_img" alt="" /></Link>
            <h4 className="title"><Link to="#">Отделка парной в бане и сауне</Link></h4>
            <div className="total">8 фотографий</div>
            <Link className="edit" to="#">Редактировать</Link>
          </div>
          <hr className="dot-line" />
          <div className="album_row">
            <Link className="album_img_container" to="#"><img src={vipimage3} className="album_img" alt="" /></Link>
            <h4 className="title"><Link to="#">Отделка парной в бане и сауне</Link></h4>
            <div className="total">8 фотографий</div>
            <Link className="edit" to="/user/15/photo_edit">Редактировать</Link>
          </div>
        </div>

        <div className="c_photos_container">
          <div className="photos_summary">Последний загруженный фотографии</div>
          <div className="photo_row">
            <Link className="photo_img_container" to="#"><img src={vipimage3} className="photo_img" alt="" /></Link>
          </div>
          <div className="photo_row">
            <Link className="photo_img_container" to="#"><img src={picava100x100} className="photo_img" alt="" /></Link>
          </div>
          <div className="photo_row">
            <Link className="photo_img_container" to="#"><img src={vipimage3} className="photo_img" alt="" /></Link>
          </div>
          <div className="photo_row">
            <Link className="photo_img_container" to="#"><img src={vipimage3} className="photo_img" alt="" /></Link>
          </div>
          <div className="photo_row">
            <Link className="photo_img_container" to="#"><img src={vipimage3} className="photo_img" alt="" /></Link>
          </div>
          <div className="photo_row">
            <Link className="photo_img_container" to="#"><img src={vipimage3} className="photo_img" alt="" /></Link>
          </div>
          <div className="photo_row">
            <Link className="photo_img_container" to="#"><img src={vipimage3} className="photo_img" alt="" /></Link>
          </div>
          <div className="photo_row">
            <Link className="photo_img_container" to="#"><img src={vipimage3} className="photo_img" alt="" /></Link>
          </div>
          <div className="photo_row">
            <Link className="photo_img_container" to="#"><img src={vipimage3} className="photo_img" alt="" /></Link>
          </div>
        </div>

      </div>
    </PageLayout>
  )
}

export default PhotoPage
