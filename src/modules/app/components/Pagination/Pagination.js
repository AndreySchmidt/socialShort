import React from 'react'
import {Link} from 'react-router-dom'

const Pagination = () => {
  return (
    <div className="c_pagination_view">
      Страницы:
      <Link to="" className="pagination prev">назад</Link>
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
