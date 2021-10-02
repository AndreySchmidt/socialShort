import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'
import QuickSearch from './../../components/QuickSearch/QuickSearch'
import Pagination from './../../../app/components/Pagination/Pagination'

import './../../components/css/lk_user_data.css'

import BlogItem from './components/BlogItem/BlogItem'

const MyBlogListPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="#">Добавить запись</Link> Мой блог
      </div>

      <div className="c_settings_layout clearfix">
        <div className="setting_sections_block">
          <div className="section_title">Фильтры поиска</div>
          <div className="section_link active"><Link to="#">Все записи</Link></div>
          <div className="section_link"><Link to="#">С комментариями</Link></div>
        </div>

        <div className="layout_inner">
          <div className="layout_inner_space">
            <div className="c_lk_blog_list">

              <h2 className="title">У Вас 15 записей в блоге</h2>
              <QuickSearch placeholder = "Быстрый поиск документа" />
              <BlogItem />

            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </PageLayout>
  )
}

export default MyBlogListPage
