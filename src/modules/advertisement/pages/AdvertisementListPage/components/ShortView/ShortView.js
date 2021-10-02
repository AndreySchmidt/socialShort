import React from 'react'
import {Link} from 'react-router-dom'

const ShortView = () => {
  return (
    <div className="c_list_view">
      <div className="list_item colored clearfix">
        <div className="right_block">
          <div className="c_add_to_list_button">
            <Link to="/" className="button_element">
              <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
            </Link>
            <div className="list-hover-wrapper">
              <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
            </div>
          </div>
        </div>
        <div className="price">955 000 руб.</div>
        <div className="title"><Link to="/">2-к квартира, 53 м², 1/12 эт.</Link></div>
      </div>
      <div className="list_item gray clearfix">
        <div className="right_block">
          <div className="c_add_to_list_button">
            <Link to="/" className="button_element">
              <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
            </Link>
            <div className="list-hover-wrapper">
              <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
            </div>
          </div>
        </div>
        <div className="price">955 000 руб.</div>
        <div className="title"><Link to="/">2-к квартира, 53 м², 1/12 эт.</Link></div>
      </div>
      <div className="list_item clearfix">
        <div className="right_block">
          <div className="c_add_to_list_button">
            <Link to="/" className="button_element">
              <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
            </Link>
            <div className="list-hover-wrapper">
              <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
            </div>
          </div>
        </div>
        <div className="price">955 000 руб.</div>
        <div className="title"><Link to="/">2-к квартира, 53 м², 1/12 эт.</Link></div>
      </div>
      <div className="list_item gray clearfix">
        <div className="right_block">
          <div className="c_add_to_list_button">
            <Link to="/" className="button_element">
              <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
            </Link>
            <div className="list-hover-wrapper">
              <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
            </div>
          </div>
        </div>
        <div className="price">955 000 руб.</div>
        <div className="title"><Link to="/">2-к квартира, 53 м², 1/12 эт.</Link></div>
      </div>
      <div className="list_item clearfix">
        <div className="right_block">
          <div className="c_add_to_list_button">
            <Link to="/" className="button_element">
              <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
            </Link>
            <div className="list-hover-wrapper">
              <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
            </div>
          </div>
        </div>
        <div className="price">955 000 руб.</div>
        <div className="title"><Link to="/">2-к квартира, 53 м², 1/12 эт.</Link></div>
      </div>
      <div className="list_item gray clearfix">
        <div className="right_block">
          <div className="c_add_to_list_button">
            <Link to="/" className="button_element">
              <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
            </Link>
            <div className="list-hover-wrapper">
              <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
            </div>
          </div>
        </div>
        <div className="price">955 000 руб.</div>
        <div className="title"><Link to="/">2-к квартира, 53 м², 1/12 эт.</Link></div>
      </div>
    </div>
  )
}

export default ShortView
