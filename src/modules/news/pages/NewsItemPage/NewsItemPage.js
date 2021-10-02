import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

import './../../../app/components/css/ad_list_page.css'
import './../../../app/components/css/breadcrumbs_bar.css'
import './../../components/css/news_block.css'
import './../../components/css/currency_block.css'
import './../../components/css/news_layout.css'
import './news_page.css'
import './share_new.css'

const NewsItemPage = () => {
  return (
    <PageLayout>
      <div className="c_news_page">
        <h2 className="title">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</h2>
        <div className="image_container">
          <img className="image" src="images/pic-width-200.jpg" alt="" />
        </div>
        <div className="content_inner clearfix">
          <div className="description">Ночной клуб Брюлов ждет любтелей хорошо отдохнуть. Уже в эту пятницу долгожданное Retro-Party и море новых коктелей от лучших барменов...</div>
          <span className="views">456 комментариев</span>
          <span className="date">8 декабря 2013</span>
        </div>

        Приглядевшись, он заметил снаряд времен Великой Отечественной войны, через пару мновений были обнаружены еще пару снарядов. Чтобы опасные находки не попались на глаза гуляющим детям, смельчак самостоятельно доставил все в Сиверское отделение полиции. В близжайшее время сотрудники военкомата вывезут и уничтожат снаряды.
        <p>По информации ГУВД по Гатчинскому району</p>
        Приглядевшись, он заметил снаряд времен Великой Отечественной войны, через пару мновений были обнаружены еще пару снарядов. Чтобы опасные находки не попались на глаза гуляющим детям, смельчак самостоятельно доставил все в Сиверское отделение полиции. В близжайшее время сотрудники военкомата вывезут и уничтожат снаряды.
        <ol>
          <li>list item</li>
          <li>list item</li>
          <li>list item</li>
        </ol>
        <p>По информации ГУВД по Гатчинскому району</p>
      </div>

      <div className="c_share_new clearfix">
        <div className="social_links">
          <strong>Поделиться:&nbsp;&nbsp;</strong>
          <Link to="#"><img alt="" src="images/social-sample-small.png" /></Link>
        </div>
        <h3>Комментарии</h3>
      </div>
      Компонент комментариев "c_wall"

      <div className="c_news_block">
        <h3 className="header">Материалы по теме</h3>
        <ul className="clearfix">
        <li className="teaser clear-left">
          <h4 className="title"><Link to="#">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
          <span className="date">8 декабря 2013</span>
          <span className="views">456 просмотров</span>
          <Link className="goto" to="#">Обсудить</Link>
        </li>
        <li className="teaser">
          <h4 className="title"><Link to="#">Кингисепп: полицейские разыскивают уклонистов</Link></h4>
          <span className="date">8 декабря 2013</span>
          <span className="views">56 просмотров</span>
          <Link className="goto" to="#">Обсудить</Link>
        </li>
        <li className="teaser">
          <h4 className="title"><Link to="#">Кингисепп:</Link></h4>
          <span className="date">8 декабря 2013</span>
          <span className="views">56 просмотров</span>
          <Link className="goto" to="#">Обсудить</Link>
        </li>
        <li className="teaser clear-left">
          <h4 className="title"><Link to="#">Кингисепп: полицейские разыскивают уклонистов</Link></h4>
          <span className="date">8 декабря 2013</span>
          <span className="views">56 просмотров</span>
          <Link className="goto" to="#">Обсудить</Link>
        </li>
        <li className="teaser">
          <h4 className="title"><Link to="#">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
          <span className="date">8 декабря 2013</span>
          <span className="views">456 просмотров</span>
          <Link className="goto" to="#">Обсудить</Link>
        </li>
        <li className="teaser">
          <h4 className="title"><Link to="#">Кингисепп:</Link></h4>
          <span className="date">8 декабря 2013</span>
          <span className="views">56 просмотров</span>
          <Link className="goto" to="#">Обсудить</Link>
        </li>
        </ul>
      </div>
    </PageLayout>
  )
}

export default NewsItemPage
