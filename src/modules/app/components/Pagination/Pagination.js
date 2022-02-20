import React from 'react'
import {Link} from 'react-router-dom'

const Pagination = ({pageSize, totalUsersQuan}) => {

  const pagesQuan = Math.ceil(totalUsersQuan / pageSize)
  let pageLinks = []
  for (let i = 1; i <= pagesQuan; i++) {
    pageLinks.push(i)
  }

  // console.log(pageLinks, 'pageLinks')

  return (
    <div className="c_pagination_view">
      Страницы:
      <Link to="" className="pagination prev">назад</Link>
      {
        pageLinks.map( page => {
          return <Link key={page} to="" className="pagination">{page}</Link>
          // <Link to="" className=`"pagination {true && active}"`>{page}</Link>
        })
      }
      <Link to="" className="pagination active">1</Link>
      <Link to="" className="pagination">2</Link>
      <Link to="" className="pagination">3</Link>
      <Link to="" className="pagination">4</Link>
      <Link to="" className="pagination">5</Link>
      <Link to="" className="pagination next">вперед</Link>
    </div>
  )
}

export default Pagination
