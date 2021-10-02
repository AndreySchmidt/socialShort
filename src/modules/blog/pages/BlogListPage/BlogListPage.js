import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'

import './../../../app/components/css/ad_list_page.css'
import Search from './../../../app/components/Search/Search'
import './blog_list.css'

const BlogListPage = () => {
  return (
    <PageLayout>
      <div className="c_blog_list">
        <Search />
        <div className="blog_filter c_type_select">
          <Link to="#" className="active">Все записи</Link>
          <Link to="#">Популярные</Link>
          <Link to="#">Наиболее обсуждаемые</Link>
        </div>
        <Pagination />
        <div className="blog_announce clearfix">
          <Link className="author-photo" to="#"><img src="images/pic-ava-100x100.jpg" title="Елизавета Владимировна" alt="Елизавета Владимировна" /></Link>
          <Link className="author-name" to="#">Елизавета Владимировна</Link><br />
          <span className="status online">online</span>
          <h3 className="title"><Link to="/blog_item">Заглавие публикации</Link></h3>
          <div className="text">
            В ходе валового анализа пространственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.
          </div>
          <div className="completive">
            <span className="date">29.10.2013</span>
            <Link to="">Общество</Link>
            <Link to="">14 комментариев</Link>
          </div>
        </div>
        <div className="dot-line"></div>
      </div>
    </PageLayout>
  )
}

export default BlogListPage
