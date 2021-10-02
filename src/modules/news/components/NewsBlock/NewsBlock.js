import React from 'react'
import {Link} from 'react-router-dom'

const NewsBlock = () => {
  return (
    <div className="c_news_block">
      <h3 className="header">Самое читаемое <i></i></h3>
      <ul>
        <li className="teaser">
          <Link to="#"><img src="images/vip-image-3.jpg" alt="" /></Link>
          <h4 className="title"><Link to="#">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
          <span className="date">8 декабря 2013</span>
          <span className="views">456 просмотров</span>
          <Link className="goto" to="#">Обсудить</Link>
        </li>
        <li className="teaser">
          <h4 className="title"><Link to="#">Кингисепп: полицейские разыскивают уклонистов</Link></h4>
          <span className="date">8 декабря 2013</span>
          <span className="views">456 просмотров</span>
          <Link className="goto" to="#">Обсудить</Link>
        </li>
        <li className="teaser">
          <h4 className="title"><Link to="#">Кингисепп:</Link></h4>
          <span className="date">8 декабря 2013</span>
          <span className="views">456 просмотров</span>
          <Link className="goto" to="#">Обсудить</Link>
        </li>
      </ul>
    </div>
  )
}

export default NewsBlock
