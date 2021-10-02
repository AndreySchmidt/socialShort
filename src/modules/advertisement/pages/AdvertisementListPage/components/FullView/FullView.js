import React from 'react'
import {Link} from 'react-router-dom'

const FullView = () => {
  return (
    <div className="c_list_extended_view">

      <div className="list_item colored clearfix">
        <div className="image_container">
          <Link to="/">
            <img className="image" src="images/ad-search-ext-list.jpg" alt=""/>
          </Link>
        </div>
        <div className="content_inner">
          <div className="right_block">
            <div className="c_add_to_list_button">
              <Link to="/" className="button_element">
                <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
              </Link>
              <div className="list-hover-wrapper">
                <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
              </div>
            </div>
            <div className="icons_container">
              <img className="icon" src="img/icon-emp.png" alt="" />
              <img className="icon" src="img/icon-pin.png" alt="" />
            </div>
          </div>
          <div className="title"><Link to="/">2-к квартира, 53 м², 1/12 эт.</Link></div>
          <div className="price">955 000 руб.</div>
          <div className="agency">Агентство</div>
          <div className="date">Добавлено: 21.02.2013</div>
        </div>
      </div>

      <div className="list_item clearfix">
        <div className="image_container">
          <Link to="/">
            <img className="image" src="images/ad-search-ext-list.jpg" alt=""/>
          </Link>
        </div>
        <div className="content_inner">
          <div className="right_block">
            <div className="c_add_to_list_button">
              <span className="button_element added">
                <img className="icon_add" src="img/icon-ok.png" alt="" /> <span>В списке</span>
              </span>
            </div>
            <div className="icons_container"></div>
          </div>
          <div className="title"><Link to="/">2-к квартира, 53 м², 1/12 эт.</Link></div>
          <div className="price">955 000 руб. <img className="price-down" src="img/icon-price-down.png" alt="" /></div>
          <div className="agency">Агентство</div>
          <div className="date">Добавлено: 21.02.2013</div>
        </div>
      </div>

      <div className="list_item gray clearfix">
        <div className="image_container">
          <Link to="/">
            <img className="image" src="images/ad-search-ext-list.jpg" alt="" />
          </Link>
        </div>
        <div className="content_inner">
          <div className="right_block">
            <div className="c_add_to_list_button">
              <Link to="/" className="button_element">
                <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
              </Link>
              <div className="list-hover-wrapper">
                <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
              </div>
            </div>
            <div className="icons_container">
              <img className="icon" src="img/icon-lift.png" alt="" />
            </div>
          </div>
          <div className="title"><Link to="/">2-к квартира, 53 м², 1/12 эт.</Link></div>
          <div className="price">955 000 руб.</div>
          <div className="agency">Агентство</div>
          <div className="date">Добавлено: 21.02.2013</div>
        </div>
      </div>

      <div className="list_item clearfix">
        <div className="image_container">
          <Link to="/">
            <img className="image" src="images/ad-search-ext-list.jpg" alt="" />
          </Link>
        </div>
        <div className="content_inner">
          <div className="right_block">
            <div className="c_add_to_list_button">
              <Link to="/" className="button_element">
                <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
              </Link>
              <div className="list-hover-wrapper">
                <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
              </div>
            </div>
            <div className="icons_container"></div>
          </div>
          <div className="title"><Link to="/">2-к квартира, 53 м², 1/12 эт.</Link></div>
          <div className="price">955 000 руб.</div>
          <div className="agency">Агентство</div>
          <div className="date">Добавлено: 21.02.2013</div>
        </div>
      </div>

      <div className="list_item gray clearfix">
        <div className="content_inner">
          <div className="right_block">
            <div className="c_add_to_list_button">
              <Link to="/" className="button_element">
                <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
              </Link>
              <div className="list-hover-wrapper">
                <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
              </div>
            </div>
            <div className="icons_container"></div>
          </div>
          <div className="title"><Link to="/">2-к квартира, 53 м², 1/12 эт.</Link></div>
          <div className="price">955 000 руб.</div>
          <div className="agency">Агентство</div>
          <div className="date">Добавлено: 21.02.2013</div>
        </div>
      </div>

      <div className="list_item clearfix">
        <div className="image_container">
          <Link to="/">
            <img className="image" src="images/ad-search-ext-list.jpg" alt="" />
          </Link>
        </div>
        <div className="content_inner">
          <div className="right_block">
            <div className="c_add_to_list_button">
              <Link to="/" className="button_element">
                <img className="icon_add" src="img/icon-add.png" alt="" /> <span>В мой список</span>
              </Link>
              <div className="list-hover-wrapper">
                <span className="list-hover"><Link to="/">Перейти в мой список</Link> <span className="arrow"></span></span>
              </div>
            </div>
            <div className="icons_container"></div>
          </div>
          <div className="title"><Link to="/">2-к квартира, 53 м², 1/12 эт.</Link></div>
          <div className="price">955 000 руб.</div>
          <div className="agency">Агентство</div>
          <div className="date">Добавлено: 21.02.2013</div>
        </div>
      </div>

    </div>
  )
}

export default FullView
