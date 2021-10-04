import React from 'react'
import {Link} from 'react-router-dom'

import vipimage3 from './../../../../images/vip-image-3.jpg'
// import picava100x100 from './../../../app/AppPageLayout/images/pic-ava-100x100.jpg'

import PageLayout from './../../PageLayout/PageLayout'

import './EditPhotoPage.css'
import './../../components/css/c_photos_container.css'
import './../../components/css/lk_user_data.css'

const EditPhotoPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="">Загрузить фотографии</Link> Фотогалерея
      </div>

      <div className="c_lk_foto_add">
        <form method="post" action="#">

          <h4 className="header">Добавить фотографии</h4>
          <div className="fieldset">

            <div className="element-container">
              <label htmlFor="album">Альбом:</label>
              <select name="album">
                <option selected="" value="">Создать новый</option>
              </select>
              <Link className="remove" to="#">Удалить альбом</Link>
            </div>

            <div className="element-container">
              <label htmlFor="name">Название альбома:</label>
              <input type="text" className="type-text" name="name" value="" />
            </div>

            <div className="element-container">
              <label htmlFor="description">Описание альбома:</label>
              <input type="text" value="" name="description" className="type-text" /><br />
            </div>

            <div className="element-container" style={{marginBottom: '12px'}}>
              <label className="normal"><input type="checkbox" name="is_common_pub" value="" /> Не отображать альбом в общем разделе <Link to="#">Фото</Link></label>
            </div>

            <div className="element-container">
              <label>Выбрать обложку:</label>
              <Link className="c_button" to="">Выбрать файл</Link>
              <div className="file-result ">
                <img alt="" src={vipimage3} />
              </div>
            </div>

            <div className="element-container">
              <label>Загрузить изображения:</label>
              <Link className="c_button" to="">Выбрать файлы</Link>
            </div>

          </div>

          <h4 className="header">Фотографии</h4>

          <div className="photo_row clearfix">
            <span className="photo_img_cont"><img className="photo_img" src={vipimage3} alt="" /></span>
            <Link className="remove" to="#">Удалить фотографию</Link>
            <div className="field-container">
              <label>Описание фотографии:</label>
              <textarea name="text" className="type-text"></textarea>
            </div>
          </div>

          <div className="photo_row clearfix">
            <span className="photo_img_cont"><img className="photo_img" src={vipimage3} alt="" /></span>
            <Link className="remove" to="#">Удалить фотографию</Link>
            <div className="field-container">
              <label>Описание фотографии:</label>
              <textarea name="text" className="type-text"></textarea>
            </div>
          </div>

          <div className="photo_row last clearfix">
            <span className="photo_img_cont"><img className="photo_img" src={vipimage3} alt="" /></span>
            <Link className="remove" to="#">Удалить фотографию</Link>
            <div className="field-container">
              <label>Описание фотографии:</label>
              <textarea name="text" className="type-text"></textarea>
            </div>
          </div>

          <div className="button-container">
            <input type="submit" value="Сохранить" name="gallery_submit" className="c_button" />
          </div>

        </form>
      </div>
    </PageLayout>
  )
}

export default EditPhotoPage
