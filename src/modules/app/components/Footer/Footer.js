import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer container clearfix">
      <div className="left_part">
        <div className="copyright">
          © 2021 LENPD.RU - Деловой портал Ленинградской области<br />
          <span className="muted">При перепечатке гиперссылка на портал обязательна.</span>
        </div>

        <div className="footer_bottom">
            <Link to=""><img src="images/counter-sample.png" alt=""/></Link>
            <Link className="about"  to="">О проекте</Link>
            <Link className="project_commerce" to="">Реклама на проекте</Link>
        </div>

      </div>

      <div className="links_list_column">
        <ul>
          <li><Link to="">Организации</Link></li>
          <li><Link to="">Недвижимость</Link></li>
          <li><Link to="">Работа</Link></li>
          <li><Link to="">Товары и услуги</Link></li>
          <li><Link to="">Частные объявления</Link></li>
          <li><Link to="">Заявки на услуги и товары</Link></li>
        </ul>

      </div>

      <div className="links_list_column">
        <ul>
          <li><Link to="">Справочник</Link></li>
          <li><Link to="">Общение</Link></li>
          <li><Link to="">Скидки и акции</Link></li>
          <li><Link to="">Мероприятия</Link></li>
          <li><Link to="">Новости</Link></li>
        </ul>

      </div>
    </div>
  )
}

export default Footer
