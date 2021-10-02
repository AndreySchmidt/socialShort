import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

const AdvertismentPage = () => {
  return (
    <PageLayout>
    <div className="c_breadcrumbs">
      <Link className="back" to="">Назад</Link>
      <div className="main-links">
        <Link to="">Доска объявлений</Link>
        <span className="divider"></span>
        <Link to="">Автомобили с пробегом</Link>
      </div>
    </div>
    <div className="c_ad_header">
      <div className="edit_ad">
        <Link to="">Редактировать</Link>
      </div>
      <div className="title">ВАЗ, 2003</div>
      <div className="other_info">Добавлено: 21.02.2013</div>
    </div>
    <div className="ad_photo_presentation clearfix">
      <div className="photo_thumbs">
        <div className="slide_container">
          <Link className="thumb active" to=""><img src="images/ad-thumb-1.jpg" alt=""/></Link>
          <Link className="thumb" to=""><img src="images/ad-thumb-2.jpg" alt=""/></Link>
          <Link className="thumb" to=""><img src="images/ad-thumb-3.jpg" alt=""/></Link>
          <Link className="thumb" to=""><img src="images/ad-thumb-4.jpg" alt=""/></Link>
          <Link className="thumb" to=""><img src="images/ad-thumb-5.jpg" alt=""/></Link>
          <Link className="thumb" to=""><img src="images/ad-thumb-5.jpg" alt=""/></Link>
          <Link className="thumb" to=""><img src="images/ad-thumb-5.jpg" alt=""/></Link>
        </div>
        <Link className="slider_up" to=""></Link>
        <Link className="slider_down" to=""></Link>
      </div>
      <div className="large_photo_container">
        <img className="large_photo" src="images/ad-main-photo.jpg" alt="" />
      </div>
    </div>
    <div className="c_ad_info_layout clearfix">
      <div className="large_column">
        <div className="c_ad_primary_info">
          <div className="data_item">
            <Link className="banner-1" to=""><img src="images/banner-1.png" alt=""/></Link>
            <span className="caption">Цена:</span>
            <span className="price">50 000 руб.</span>
          </div>
          <div className="data_item">
            <span className="caption">Продавец:</span>
            <span className="seller"><Link to="">Михаил Иванович</Link></span>
            <Link className="write_to_seller" to="">(написать письмо продавцу)</Link>
          </div>
          <div className="data_item">
            <span className="caption">Телефон:</span>
            <span className="phone">+7 (921) 344-56-77</span>
          </div>
          <div className="data_item">
            <span className="caption">Район:</span>
            <span className="district">Гатчина и Гатчинский район</span>
          </div>
        </div>
        <div className="c_ad_secondary_info">
          <div className="category">
            <Link to="">Автомобили с пробегом</Link>
            <span className="divider"></span>
            <Link to="">Продам</Link>
          </div>
          <div className="data_item">
            Пробег: <span className="emp">140 000 - 149 999 км</span>
          </div>
          <div className="data_item">
            Год выпуска: <span className="emp">2003</span>
          </div>
          <div className="data_item">
            1.6 МТ, бензин, седан, цвет серебряный
          </div>
        </div>
        <div className="c_ad_text">
          <p>Срочно продам машину.Торг.Осмотр машины в г.Отрадном.</p>
        </div>
      </div>

      <div className="small_column">
        <div className="c_emphasized_ad_info">
          <div className="views">
            <span className="caption">Просмотры:</span>
            <span className="value">Сегодня 507, Всего 11234</span>
          </div>
          <div className="options_title">Увеличить число просмотров:</div>
          <ul className="options_list">
            <li className="vip"><Link to="">Сделать VIP</Link></li>
            <li className="pin"><Link to="">Закрепить объявление</Link></li>
            <li className="emp"><Link to="">Выделить цыетом</Link></li>
            <li className="lift"><Link to="">Поднять объявление в поиске</Link></li>
          </ul>
        </div>
        <Link to=""><img src="images/banner-2.png" alt=""/></Link>
      </div>
    </div>

    <div className="ad_options clearfix">
      <div className="social_links">
        <img src="images/social-sample-small.png" alt="" />
      </div>
      <Link className="add_to_list" to="">В мой список</Link>
      <Link className="report" to="">Пожаловаться</Link>
    </div>

      <div className="c_similar_ads">
      <div className="title">Похожие объявления:</div>
      <div className="ad_list clearfix">
        <div className="list_item">
          <div className="photo"><Link to=""><img src="images/similar-ad-photo.jpg" alt="" /></Link></div>
          <div className="description"><Link to="">ВАЗ 1.5 МТ, 2002, седан</Link></div>
          <div className="price">955 000 руб.</div>
        </div>
       <div className="list_item">
          <div className="photo"><Link to=""><img src="images/similar-ad-photo.jpg" alt="" /></Link></div>
          <div className="description"><Link to="">ВАЗ 1.5 МТ, 2002, седан</Link></div>
          <div className="price">955 000 руб.</div>
        </div>
       <div className="list_item">
          <div className="photo"><Link to=""><img src="images/similar-ad-photo.jpg" alt="" /></Link></div>
          <div className="description"><Link to="">ВАЗ 1.5 МТ, 2002, седан</Link></div>
          <div className="price">955 000 руб.</div>
        </div>
       <div className="list_item">
          <div className="photo"><Link to=""><img src="images/similar-ad-photo.jpg" alt="" /></Link></div>
          <div className="description"><Link to="">ВАЗ 1.5 МТ, 2002, седан</Link></div>
          <div className="price">955 000 руб.</div>
        </div>
        <div className="list_item">
            <div className="photo"><Link to=""><img src="images/similar-ad-photo.jpg" alt="" /></Link></div>
            <div className="description"><Link to="">ВАЗ 1.5 МТ, 2002, седан</Link></div>
            <div className="price">955 000 руб.</div>
        </div>
      </div>
    </div>
  </PageLayout>
  )
}

export default AdvertismentPage
