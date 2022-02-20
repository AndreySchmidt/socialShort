import React, {useCallback, useMemo} from 'react'
import {Link} from 'react-router-dom'
import classnames from 'classnames'

const Pagination = ({pageSize, totalUsersQuan, setCurrentPage, currentPage}) => {

  const pageLinks = useMemo(() => {
    const pagesQuan = Math.ceil(totalUsersQuan / pageSize)
    const _pageLinks = []
    for (let i = 1; i <= pagesQuan; i++) {
      _pageLinks.push(i)
    }

    return _pageLinks
  }, [totalUsersQuan, pageSize])

  // const pageLinks = []
  // for (let i = 1; i <= pagesQuan; i++) {
  //   pageLinks.push(i)
  // }

  const getPageHandler = useCallback (
    (e, page) => {
      e.preventDefault()
      setCurrentPage(e.target.getAttribute('data-page'))
    },
    [setCurrentPage]
  )

  return (
    <div className="c_pagination_view">
      Страницы:
      <Link to="" className="pagination prev">назад</Link>
      {
        pageLinks.map( page => {
          return <Link data-page={page} onClick={getPageHandler} key={page} to="" className={classnames('pagination', (currentPage === page) && "active")}>{page}</Link>

          // return <Link data-page={page} onClick={getPageHandler} key={page} to="" className={`pagination ${(currentPage === page) && "active"}`}>{page}</Link>
          // return <Link data-page={page} onClick={getPageHandler} key={page} to="" className="pagination">{page}</Link>
        })
      }
    </div>
  )
}

export default Pagination

// <Link to="" className="pagination active">1</Link>
// <Link to="" className="pagination">2</Link>
// <Link to="" className="pagination">3</Link>
// <Link to="" className="pagination">4</Link>
// <Link to="" className="pagination">5</Link>
// <Link to="" className="pagination next">вперед</Link>
