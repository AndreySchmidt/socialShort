import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

import './desk_add.css'
import './../../../app/components/css/breadcrumbs_bar.css'

const AdvertismentAddPage = () => {
  return (
    <PageLayout>
      <div className="c_breadcrumbs_bar">
        <Link to="#" className="back">Назад</Link>
        <div className="breadcrumbs">
          <Link to="#">Доска объявлений</Link>
          <span className="separator">&gt;</span>
          <Link to="#">Добавить объявление</Link>
        </div>
      </div>
      <div className="c_desk_add">
        <form method="post" action="#">
          <div className="notification-block">
            <p className="red">Если у Вас уже есть зарегистрированный профиль, пожалуйста, сначала
            <Link className="red" to="#">авторизируйтесь</Link></p>
          </div>
          <h4 className="header">Добавить объявление</h4>
          <div className="fieldset">
            <div className="element-container first-element">
              <label className="normal"><input type="radio" value="NO" name="type[]" checked="checked" /> Частное лицо</label>
              &nbsp;&nbsp;&nbsp;
              <label className="normal"><input type="radio" value="YES" name="type[]" /> Компания</label>
            </div>
            <div className="element-container">
              <label htmlFor="name">Ваше имя:</label>
              <input type="text" className="type-text" name="name" value="" /><br />
              <label className="normal"><input type="checkbox" name="" value="" /> Сделать ссылкой на мой профиль на портале</label>
            </div>
            <div className="element-container">
              <label htmlFor="email">Электронная почта:</label>
              <input type="text" value="" name="email" className="type-text" /><br />
              <label className="normal"><input type="checkbox" name="" value="" /> Я не хочу, чтобы мне писали вопросы на e-mail</label>
            </div>
            <div className="element-container">
              <label htmlFor="phone">Телефон:</label>
              <input type="text" value="" name="phone" className="type-text" />
            </div>
            <div className="element-container">
              <label>Районы:</label>
              <Link to="" className="select-init">Выбрать районы</Link><br />
              <div className="select-result">
                <span>Гатчина и Гатчинский район</span>,
                <span>Волосово и Волосовский район</span>
              </div>
            </div>
            <div className="element-container">
              <label htmlFor="category">Категория:</label>
              <select name="category">
                <option selected="" value="">Выбарите категорию</option>
              </select>
            </div>
            <div className="element-container">
              <label htmlFor="price">Цена (руб.):</label>
              <input type="text" value="" name="price" className="type-text" /><br />
            </div>
            <div className="element-container">
              <label htmlFor="subject">Заголовок объявления:</label>
              <input type="text" value="" name="subject" className="type-text" />
            </div>
            <div className="element-container">
              <label htmlFor="text">Описание объявления:</label>
              <textarea name="text" className="type-text"></textarea>
            </div>
            <div className="element-container">
              <label htmlFor="passw">Придумайте пароль:</label>
              <input type="password" value="" name="passw" className="type-text" />
            </div>
            <div className="element-container">
              <label htmlFor="passw">Повторите пароль:</label>
              <input type="password" value="" name="passw" className="type-text" />
            </div>
            <div className="element-container">
              <label htmlFor="file">Фотографии:</label>
              <Link className="c_button" to="">Выбрать файл</Link>
              <span className="notification">Вы можете загрузить до 15 фотографий</span>
              <br />или<br />
              <input type="file" className="upload" name="file" />
              <div className="file-result ">
                <img alt="" src="images/newws-mini.jpg" />
                <img alt="" src="images/newws-mini.jpg" />
                <img alt="" src="images/newws-mini.jpg" />
                <img alt="" src="images/newws-mini.jpg" />
                <img alt="" src="images/newws-mini.jpg" />
                <img alt="" src="images/newws-mini.jpg" />
                <img alt="" src="images/newws-mini.jpg" />
                <img alt="" src="images/newws-mini.jpg" />
                <img alt="" src="images/newws-mini.jpg" />
                <img alt="" src="images/newws-mini.jpg" />
              </div>
            </div>
            <div className="element-container">
              <label htmlFor="keep">Срок хранения (дней):</label>
              <select name="keep">
                <option value="7">7</option>
                <option value="10">10</option>
                <option selected="" value="15">15</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="100">100</option>
              </select>
            </div>
            <div className="element-container">
              <label htmlFor="captcha">Введите код:</label>
              <input className="type-text captcha-input width-third" type="text" value="" name="captcha" />
              <img className="captcha-image" src="images/captcha.jpg" alt="" />
              <Link to="#">Показать другой код</Link>
            </div>
            <div className="element-container button-container">
              <input type="submit" value="Добавить объявление" name="brief_submit" className="c_add_ad_button" />
            </div>
          </div>
        </form>
      </div>
    </PageLayout>
  )
}

export default AdvertismentAddPage
