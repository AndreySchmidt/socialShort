import React from 'react'
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'

import './../../actions'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'

import './../../../app/components/css/ad_list_page.css'
import Search from './../../../app/components/Search/Search'
import './blog_list.css'

import BlogItem from './BlogItem'

const BlogListPage = (props) => {
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
        { props.blogLP && props.blogLP.map(item => <BlogItem
            key={item.id}
            name={item.name}
            online={item.online}
            subject={item.subject}
            description={item.description}
            category={item.category}
            commentQuan={item.commentQuan}
            dateTime={item.dateTime}
          />) }
        <Pagination />
      </div>
    </PageLayout>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     blogLP: state.blogLP
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//      toggleBlogList: () => {dispatch.loadBlogList()}
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BlogListPage)
export default BlogListPage
