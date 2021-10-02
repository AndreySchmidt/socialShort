import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

import './../../../app/components/css/ad_list_page.css'
import './../../../app/components/css/breadcrumbs_bar.css'
import './../../components/css/news_block.css'
import './../../components/css/currency_block.css'
import './../../components/css/news_layout.css'
import './news_tabloid.css'
import './news_by_rubrik.css'
import './news_corporative.css'
import './news_job_estate.css'
import './news_last_comments.css'

const NewsMainPage = () => {
  return (
    <PageLayout>
      <div className="c_news_tabloid clearfix">
        <div className="convas">
          <div className="rubrik">Общество</div>
          <img className="" src="./images/news-hero1.jpg" alt="" />
          <div className="description">Тем не менее, многие пользуются почтой на бесплатных почтовых сервисах – mail.ru и т.п.</div>
        </div>
        <div className="list">
          <div className="item selected"><div><Link to="/news_item">Пушкинский праздник</Link></div></div>
          <div className="item"><div><Link to="/news_item">Пушкинский праздник на Гатчинской земле</Link></div></div>
          <div className="item"><div><Link to="/news_item">Пушкинский праздник на Гатчинской земле</Link></div></div>
          <div className="item"><div><Link to="/news_item">Пушкинский праздник на Гатчинской земле</Link></div></div>
          <div className="item">
            <div><Link to="/news_item">Пушкинский праздник</Link></div>
            <div className="rubrik">Общество</div>
            <img className="" src="images/news-hero1.jpg" alt="" />
            <div className="description">Тем не менее, многие пользуются почтой на бесплатных почтовых сервисах – mail.ru и т.п.</div>
          </div>
        </div>
      </div>
      <div className="dot-separator-3c3c3c"></div>
      <div className="column_wrapper clearfix">
      <div className="c_news_by_rubrik odd">
        <h3 className="header"><Link to="/news_list">Общество</Link></h3>
        <ul>
          <li className="teaser">
            <Link to="/news_item"><img src="images/image-width340.jpg" alt="" /></Link>
            <h4 className="title"><Link to="/news_item">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп: полицейские разыскивают уклонистов</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп:</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
        </ul>
      </div>
      <div className="c_news_by_rubrik">
        <h3 className="header"><Link to="/news_list">Экономика</Link></h3>
        <ul>
          <li className="teaser">
            <Link to="/news_item"><img src="images/image-width340.jpg" alt="" /></Link>
            <h4 className="title"><Link to="/news_item">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп: полицейские разыскивают уклонистов</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп:</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
        </ul>
      </div>
      </div>
      <div className="dot-separator-3c3c3c"></div>
      <div className="c_news_corporative">
        <h3 className="header"><Link to="/news_list">Новости организаций</Link></h3>
        <ul className="clearfix">
          <li className="teaser clear-left">
            <Link to="/news_item"><img src="images/newws-mini.jpg" alt="" /></Link>
            <div className="description"><Link to="/news_item">Тем не менее, многие пользуются почтой на бесплатных почтовых сервисах, чем усложняют себе жизнь. Это ж несерьезно!</Link></div>
            <span className="date">12 декабря 2013</span>
          </li>
          <li className="teaser">
            <div className="description"><Link to="/news_item">Тем не менее, многие пользуются почтой на бесплатных почтовых сервисах – mail.ru и т.п.</Link></div>
            <span className="date">12 декабря 2013</span>
          </li>
          <li className="teaser clear-left">
            <Link to="/news_item"><img src="images/newws-mini.jpg" alt="" /></Link>
            <div className="description"><Link to="/news_item">Тем не менее, многие пользуются почтой на бесплатных почтовых сервисах – mail.ru и т.п.</Link></div>
            <span className="date">12 декабря 2013</span>
          </li>
          <li className="teaser">
            <Link to="/news_item"><img src="images/newws-mini.jpg" alt="" /></Link>
            <div className="description"><Link to="/news_item">Тем не менее, многие пользуются почтой на бесплатных почтовых сервисах – mail.ru и т.п.</Link></div>
            <span className="date">12 декабря 2013</span>
          </li>
          <li className="teaser clear-left">
            <div className="description"><Link to="/news_item">Тем не менее, многие пользуются почтой на бесплатных почтовых сервисах, чем усложняют себе жизнь. Это ж несерьезно!</Link></div>
            <span className="date">12 декабря 2013</span>
          </li>
          <li className="teaser">
            <div className="description"><Link to="/news_item">Тем не менее, многие пользуются почтой на бесплатных почтовых сервисах – mail.ru и т.п.</Link></div>
            <span className="date">12 декабря 2013</span>
          </li>
        </ul>
      </div>
      <div className="column_wrapper clearfix">
      <div className="c_news_by_rubrik odd">
        <h3 className="header"><Link to="/news_list">Общество</Link></h3>
        <ul>
          <li className="teaser">
            <Link to="/news_item"><img src="images/image-width340.jpg" alt="" /></Link>
            <h4 className="title"><Link to="/news_item">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп: полицейские разыскивают уклонистов</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп:</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
        </ul>
      </div>
      <div className="c_news_by_rubrik">
        <h3 className="header"><Link to="/news_list">Власть</Link></h3>
        <ul>
          <li className="teaser">
            <Link to="/news_item"><img src="images/image-width340.jpg" alt="" /></Link>
            <h4 className="title"><Link to="/news_item">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп: полицейские разыскивают уклонистов</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп:</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
        </ul>
      </div>
      </div>
      <div className="dot-separator-3c3c3c"></div>
      <div className="column_wrapper clearfix">
      <div className="c_news_by_rubrik odd">
        <h3 className="header"><Link to="/news_list">Культура</Link></h3>
        <ul>
          <li className="teaser">
            <Link to="/news_item"><img src="images/image-width340.jpg" alt="" /></Link>
            <h4 className="title"><Link to="/news_item">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп: полицейские разыскивают уклонистов</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп:</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
        </ul>
      </div>
      <div className="c_news_by_rubrik">
        <h3 className="header"><Link to="/news_list">Спорт</Link></h3>
        <ul>
          <li className="teaser">
            <Link to="/news_item"><img src="images/image-width340.jpg" alt="" /></Link>
            <h4 className="title"><Link to="/news_item">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп: полицейские разыскивают уклонистов</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп:</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
        </ul>
      </div>
      </div>
      <div className="dot-separator-3c3c3c"></div>
      <div className="column_wrapper clearfix">
      <div className="c_news_by_rubrik odd">
        <h3 className="header"><Link to="/news_list">Политика</Link></h3>
        <ul>
          <li className="teaser">
            <Link to="/news_item"><img src="images/image-width340.jpg" alt="" /></Link>
            <h4 className="title"><Link to="/news_item">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп: полицейские разыскивают уклонистов</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп:</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
        </ul>
      </div>
      <div className="c_news_by_rubrik">
        <h3 className="header"><Link to="/news_list">Досуг</Link></h3>
        <ul>
          <li className="teaser">
            <Link to="/news_item"><img src="images/image-width340.jpg" alt="" /></Link>
            <h4 className="title"><Link to="/news_item">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп: полицейские разыскивают уклонистов</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп:</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
        </ul>
      </div>
      </div>
      <div className="dot-separator-3c3c3c"></div>
      <div className="c_news_job_estate">
        <h3 className="header"><Link to="/news_list">Новости недвижемости</Link></h3>
        <ul>
          <li className="teaser clearfix">
            <Link to="/news_item"><img src="images/pic-80x80.jpg" alt="" /></Link>
            <h4 className="title"><Link to="/news_item">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны. В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
            <div className="description">
              <div className="text">Раньше ученые полагали, что трехкомпонентное образование распознает диэтиловый эфир, однако между карбоксильной группой и аминогруппой может возникнуть солевой мостик. Полоса поглощения гомологична. Комплекс-аддукт взвешивает рацемический сахар, как и предсказывает основной постулат квантовой химии. Окисление химически полимеризует органический гомолог, тем самым открывая возможность. Раньше ученые полагали, что трехкомпонентное образование распознает диэтиловый эфир, однако между карбоксильной группой и аминогруппой может возникнуть солевой мостик.</div>
              <Link className="goto" to="#">Обсудить</Link>
              <span className="views">456 просмотров</span>
              <span className="date">8 декабря 2013</span>
            </div>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп: полицейские разыскивают уклонистов</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп:</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
        </ul>
      </div>
      <div className="dot-separator-3c3c3c"></div>
      <div className="c_news_job_estate">
        <h3 className="header"><Link to="/news_list">Новости рынка труда</Link></h3>
        <ul>
          <li className="teaser clearfix">
            <Link to="/news_item"><img src="images/pic-80x80.jpg" alt="" /></Link>
            <h4 className="title"><Link to="/news_item">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны. В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны</Link></h4>
            <div className="description">
              <div className="text">Раньше ученые полагали, что трехкомпонентное образование распознает диэтиловый эфир, однако между карбоксильной группой и аминогруппой может возникнуть солевой мостик. Полоса поглощения гомологична. Комплекс-аддукт взвешивает рацемический сахар, как и предсказывает основной постулат квантовой химии. Окисление химически полимеризует органический гомолог, тем самым открывая возможность. Раньше ученые полагали, что трехкомпонентное образование распознает диэтиловый эфир, однако между карбоксильной группой и аминогруппой может возникнуть солевой мостик.</div>
              <Link className="goto" to="#">Обсудить</Link>
              <span className="views">456 просмотров</span>
              <span className="date">8 декабря 2013</span>
            </div>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп: полицейские разыскивают уклонистов</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
          <li className="teaser">
            <h4 className="title"><Link to="/news_item">Кингисепп:</Link></h4>
            <Link className="goto" to="#">Обсудить</Link>
            <span className="views">456 просмотров</span>
            <span className="date">8 декабря 2013</span>
          </li>
        </ul>
      </div>
      <div className="dot-separator-3c3c3c"></div>
      <div className="c_news_last_comments">
        <h3 className="header">Последние комментарии</h3>
        <h4 className="title"><Link to="/news_item">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны.</Link></h4>
        <div className=" clearfix">
          <img className="user-avatar" src="images/wall-avatar-1.jpg" alt="" />
          <div className="name">Павел Кравцов</div>
          <div className="description">
            <div className="text">Раньше ученые полагали, что трехкомпонентное образование распознает диэтиловый эфир, однако между карбоксильной группой и аминогруппой может возникнуть солевой мостик. Полоса поглощения гомологична. Комплекс-аддукт взвешивает рацемический сахар, как и предсказывает основной постулат квантовой химии. Окисление химически полимеризует органический гомолог, тем самым открывая возможность. Раньше ученые полагали, что трехкомпонентное образование распознает диэтиловый эфир, однако между карбоксильной группой и аминогруппой может возникнуть солевой мостик.</div>
            <span className="date">2.05.2013</span>
          </div>
        </div>
        <h4 className="title"><Link to="/news_item">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны.</Link></h4>
        <div className=" clearfix">
          <img className="user-avatar" src="images/wall-avatar-1.jpg" alt="" />
          <div className="name">Павел Кравцов</div>
          <div className="description">
            <div className="text">Мелкий комментарий</div>
            <span className="date">2.05.2013</span>
          </div>
        </div>
        <h4 className="title"><Link to="/news_item">В Гатчинском районе обнаружены снаряды времен Великой Отечественной войны.</Link></h4>
        <div className=" clearfix">
          <img className="user-avatar" src="images/wall-avatar-1.jpg" alt="" />
          <div className="name">Павел Кравцов</div>
          <div className="description">
            <div className="text">Мелкий комментарий</div>
            <span className="date">2.05.2013</span>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default NewsMainPage
