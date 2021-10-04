import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

import pic1 from './../../../../images/pic-1.jpg'

import './CartPage.css'
import './lk_cart_items.css'
import './../../components/css/lk_user_data.css'

const CartPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="#">Продолжить покупки</Link> Корзина товаров / услуг</div>
      <div className="c_lk_cart">

        <div className="company_block">
          <div className="pre-title">Продавец:</div>
          <h4 className="title"><Link to="">Ижора-Строй. Материалы и оборудование с доставкой по России</Link></h4>

          <div className="contacts_section">
            <span className="phone">+7 (921) 344-56-77</span>
            <Link className="mail" to="mailto:company@yandex.ru">company@yandex.ru</Link>
            <Link className="site" to="">www.company-site.ru</Link>
          </div>
          <div className="bottom_link">
            <Link to="">Скидки и акции (3)</Link>
            <Link to="">Отзывы (4)</Link>
            <Link to="">Товары (34)</Link>
            <Link to="">Новости</Link>
            <Link to="">Фото </Link>
            <Link to="">Видео</Link>
          </div>
          <div className="comment-corner"></div>
        </div>


        <div className="c_lk_cart_items">

          <div className="list_item clearfix">
            <div className="image_container">
              <Link to="#"><img className="image" src={pic1} alt="" /></Link>
            </div>

            <h4 className="title"><Link to="#">Наматрасник "Стебель бамбука 160x200. RETRO-PARTY в ночном клубе Брюлов!</Link></h4>

            <div className="inner_content">
              <div className="text_line">
                <span className="label">Цена:</span>
                <strong className="price">23 534 300 руб.</strong>
                <span className="label">Количество:</span>
                <input className="type-text field" type="text" name="" value="23" />
                <Link className="remove last" to="" title="Удалить из корзины">Удалить из корзины</Link>
              </div>
              <div className="text_line">
                <span className="label">Итого:</span>
                <strong className="total">29 900 руб.</strong>
                <span className="">Минимальный заказ:</span>
                <span className="blue">5 000 руб.</span>
              </div>
            </div>
          </div>

          <div className="list_item clearfix">
            <div className="image_container">
              <Link to="#"><img className="image" src={pic1} alt="" /></Link>
            </div>

            <h4 className="title"><Link to="#">Наматрасник "Стебель бамбука 160x200. RETRO-PARTY в ночном клубе Брюлов!</Link></h4>

            <div className="inner_content">
              <div className="text_line">
                <span className="label">Цена:</span>
                <strong className="price">1 300 руб.</strong>
                <span className="label">Количество:</span>
                <input className="type-text field" type="text" name="" value="2300" />
                <Link className="remove last" to="" title="Удалить из корзины">Удалить из корзины</Link>
              </div>
              <div className="text_line">
                <span className="label">Итого:</span>
                <strong className="total">29 900 000 руб.</strong>
                <span className="">Минимальный заказ:</span>
                <span className="blue">5 000 руб.</span>
              </div>
            </div>
          </div>

          <div className="submit_order">
            <div className="text_line">
              <span className="label">На общую сумму:</span>
              <strong className="total">59 800 руб.</strong>
            </div>
            <Link className="c_button_large" to="/">Оформить заказ</Link>
          </div>
        </div>

        <div className="company_block">
          <div className="pre-title">Продавец:</div>
          <h4 className="title"><Link to="">Ижора-Строй. Материалы и оборудование с доставкой по России</Link></h4>

          <div className="contacts_section">
            <span className="phone">+7 (921) 344-56-77</span>
            <Link className="mail" to="mailto:company@yandex.ru">company@yandex.ru</Link>
            <Link className="site" to="">www.company-site.ru</Link>
          </div>
          <div className="bottom_link">
            <Link to="">Скидки и акции (3)</Link>
            <Link to="">Отзывы (4)</Link>
            <Link to="">Товары (34)</Link>
            <Link to="">Новости</Link>
            <Link to="">Фото </Link>
            <Link to="">Видео</Link>
          </div>
          <div className="comment-corner"></div>
        </div>

        <div className="c_lk_cart_items">
          <div className="list_item clearfix">
            <div className="image_container">
              <Link to="#"><img className="image" src={pic1} alt="" /></Link>
            </div>

            <h4 className="title"><Link to="#">Наматрасник "Стебель бамбука 160x200. RETRO-PARTY в ночном клубе Брюлов!</Link></h4>

            <div className="inner_content">
              <div className="text_line">
                <span className="label">Цена:</span>
                <strong className="price">300 руб.</strong>
                <span className="label">Количество:</span>
                <input className="type-text field" type="text" name="" value="1" />
                <Link className="remove last" to="" title="Удалить из корзины">Удалить из корзины</Link>
              </div>
              <div className="text_line">
                <span className="label">Итого:</span>
                <strong className="total">1 900 руб.</strong>
                <span className="">Минимальный заказ:</span>
                <span className="blue">5 000 руб.</span>
              </div>
            </div>
          </div>

          <div className="list_item clearfix">
            <div className="image_container">
              <Link to="#"><img className="image" src={pic1} alt="" /></Link>
            </div>

            <h4 className="title"><Link to="#">Наматрасник "Стебель бамбука 160x200. RETRO-PARTY в ночном клубе Брюлов!</Link></h4>

            <div className="inner_content">

              <div className="text_line">
                <span className="label">Цена:</span>
                <strong className="price">1 300 руб.</strong>
                <span className="label">Количество:</span>
                <input className="type-text field" type="text" name="" value="1" />
                <Link className="remove last" to="" title="Удалить из корзины">Удалить из корзины</Link>
              </div>
              <div className="text_line">
                <span className="label">Итого:</span>
                <strong className="total">1 300 руб.</strong>
                <span className="">Минимальный заказ:</span>
                <span className="blue">5 000 руб.</span>
              </div>

            </div>
          </div>

          <div className="submit_order">
            <div className="text_line">
              <span className="label">На общую сумму:</span>
              <strong className="total">59 800 руб.</strong>
            </div>
            <div className="text_line">
              <span className="blue">Общая сумма меньше допустимой минимальной суммы заказа</span>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  )
}

export default CartPage
