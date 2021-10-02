import React from 'react'
import {Link} from 'react-router-dom'

const OfferCarousel = () => {
  return (
    <div className="c_offer_carousel">
      <div className="header">Карусель предложений</div>
      <div className="question_how_to"><Link to="/">Как сюда попасть?</Link></div>
      <div className="offer_list">
        <div className="list_item clearfix">
          <Link className="offer_image" to="/"><img src="images/offer-image.jpg" alt=""/></Link>
          <div className="offer-link">
            <Link to="/">Отделка помещений под ключ. Отличные цены!</Link>
          </div>
        </div>
        <div className="list_item clearfix">
          <Link className="offer_image" to="/"><img src="images/offer-image.jpg" alt=""/></Link>
          <div className="offer-link">
            <Link to="/">Отделка помещений под ключ. Отличные цены!</Link>
          </div>
        </div>
        <div className="list_item clearfix">
          <Link className="offer_image" to="/"><img src="images/offer-image.jpg" alt=""/></Link>
          <div className="offer-link">
            <Link to="/">Отделка помещений под ключ. Отличные цены!</Link>
          </div>
        </div>
        <div className="list_item clearfix">
          <Link className="offer_image" to="/"><img src="images/offer-image.jpg" alt=""/></Link>
          <div className="offer-link">
            <Link to="/">Отделка помещений под ключ. Отличные цены!</Link>
          </div>
        </div>
        <div className="list_item clearfix">
          <Link className="offer_image" to="/"><img src="images/offer-image.jpg" alt=""/></Link>
          <div className="offer-link">
            <Link to="/">Отделка помещений под ключ. Отличные цены!</Link>
          </div>
        </div>
        <div className="list_item clearfix">
          <Link className="offer_image" to="/"><img src="images/offer-image.jpg" alt=""/></Link>
          <div className="offer-link">
            <Link to="/">Отделка помещений под ключ. Отличные цены!</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferCarousel
