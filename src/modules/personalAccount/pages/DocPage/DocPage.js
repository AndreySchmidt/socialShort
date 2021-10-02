import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

import './DocPage.css'
import './../../components/css/lk_user_data.css'
import './../../../app/components/css/ad_list_page.css'

import QuickSearch from './../../components/QuickSearch/QuickSearch'
import Pagination from './../../../app/components/Pagination/Pagination'

const DocPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="/user/15/edit_user_data/main">Загрузить документ</Link>Документы
      </div>

      <div className="c_settings_layout clearfix">
        <div className="setting_sections_block">
          <div className="section_title">Фильтры поиска</div>

          <div className="section_link active"><Link to="doc">Все документы</Link></div>
          <div className="section_link"><Link to="doc/send">Отправленные</Link></div>
        </div>

        <div className="layout_inner">
          <div className="layout_inner_space">
            <div className="c_document_list">

              <h3 className="title">У вас 18 документов</h3>
              <QuickSearch placeholder = "Быстрый поиск документа" />

              <div className="document_item">
                <Link className="file" to="#">Счет 1133 от 21.08.2013.xls</Link><br />
                <div className="date">Загружен: 21.02.2013</div>
                <Link className="remove" to="#">Удалить</Link>
              </div>

              <div className="document_item last">
                <Link className="file" to="#">Сравнительная характеристика на устройства производства Siemens и Bosh (от 12.03.2013).xls</Link><br />
                <div className="date">Загружен: 21.02.2013</div>
                <Link className="remove" to="#">Удалить</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </PageLayout>
  )
}

export default DocPage
