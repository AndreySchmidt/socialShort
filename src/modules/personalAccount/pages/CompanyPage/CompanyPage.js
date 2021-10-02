import React from 'react'
import {Link} from 'react-router-dom'

import adsearchextlist2 from './../../../app/AppPageLayout/images/ad-search-ext-list-2.jpg'

import PageLayout from './../../PageLayout/PageLayout'

import './company_control_bar.css'
import './../../components/css/lk_user_data.css'
import './../../../app/components/css/ad_list_page.css'

const CompanyPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link to="" className="c_button_large link_right">Добавить организацию</Link> Управление страницами в каталоге организаций
      </div>

      <div className="c_list_extended_org_view">

        <div className="list_item clearfix">

          <div className="image_container ">
            <Link to=""><img className="image" src={adsearchextlist2} alt="" /></Link>
          </div>

          <div className="content_inner">

            <div className="title"><Link to="organization/4">ООО ПрофТехНастил филиал Ижора-Строй по СЗФО. Материалы и оборудование с доставкой по России</Link></div>

            <div className="contacts_section">
              <div className="column_third">
                <div className="contact_item phone">+79173755575</div>
              </div>
              <div className="column_third">
                <div className="contact_item mail"><Link to="zamivan@mail.ru">zamivan@mail.ru</Link></div>
              </div>
              <div className="column_third">
                <div className="contact_item site"><Link to="">site.ru</Link></div>
              </div>
            </div>

            <div className="muted_text">category_id: 1.</div>

            <div className="bottom_link">
              <Link to="">Скидки и акции (3)</Link>
              <Link to="">Отзывы (4)</Link>
              <Link to="">Товары (34)</Link>
              <Link to="">Новости</Link>
              <Link to="">Фото </Link>
              <Link to="">Видео</Link>
            </div>

            <div className="company_control_bar">
              <Link className="link edit" to="#" >Редактирование / настройка страницы</Link>
              <Link className="link " to="#" >Статистика, тариф</Link>
            </div>

          </div>
        </div>


        <div className="list_item gray clearfix">

          <div className="image_container">
            <Link to=""><img className="image" src={adsearchextlist2} alt="" /></Link>
          </div>

          <div className="content_inner">
            <div className="title"><Link to="">Ижора-Строй. Материалы и оборудование с доставкой по России</Link></div>

            <div className="contacts_section">
              <div className="column_third">
                <div className="contact_item phone">+7 (921) 344-56-77</div>
              </div>
              <div className="column_third">
                <div className="contact_item mail"><Link to="mailto:company@yandex.ru">company@yandex.ru</Link></div>
              </div>
              <div className="column_third">
                <div className="contact_item site"><Link to="">www.company-site.ru</Link></div>
              </div>
            </div>

            <div className="muted_text">Межкомнатные двери от производителя.</div>

            <div className="bottom_link">
              <Link to="">Скидки и акции (3)</Link>
              <Link to="">Отзывы (4)</Link>
              <Link to="">Товары (34)</Link>
              <Link to="">Новости</Link>
              <Link to="">Фото </Link>
              <Link to="">Видео</Link>
            </div>

            <div className="company_control_bar">
              <Link className="link edit" to="#" >Редактирование / настройка страницы</Link>
              <Link className="link " to="#" >Статистика, тариф</Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  )
}

export default CompanyPage
