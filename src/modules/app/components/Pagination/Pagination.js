import React, {useCallback, useMemo, useState} from 'react'
import {Link} from 'react-router-dom'
import classnames from 'classnames'

const Pagination = ({pageSize, totalUsersQuan, setCurrentPage, currentPage, partSize = 30}) => {

  let pagesQuan = 0
  const pageLinks = useMemo(() => {
    pagesQuan = Math.ceil(totalUsersQuan / pageSize)
    // const pagesQuan = Math.ceil(totalUsersQuan / pageSize)
    // console.log(pagesQuan);
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

  // part
  let partQuan = Math.ceil(pagesQuan / partSize)
  let [partNumber, setPartNumber] = useState(1)
  let leftPartNumber = (partNumber - 1) * partSize + 1
  let rightPartNumber = partNumber * partSize



  return (
    <div className="c_pagination_view">
      Страницы:
      { partNumber > 1 &&
        <Link onClick = { ( e ) => {
              e.preventDefault()
              setPartNumber(partNumber - 1)
            }
          } to="" className="pagination prev">назад
        </Link>
      }

      {
        pageLinks.filter( (part) => part >= leftPartNumber && part <= rightPartNumber )
        .map( page => {
          return <Link data-page={page} onClick={getPageHandler} key={page} to="" className={classnames('pagination', (currentPage === page) && "active")}>{page}</Link>

          // return <Link data-page={page} onClick={getPageHandler} key={page} to="" className={`pagination ${(currentPage === page) && "active"}`}>{page}</Link>
          // return <Link data-page={page} onClick={getPageHandler} key={page} to="" className="pagination">{page}</Link>
        })
      }

      { partQuan > partNumber &&
        <Link onClick = { ( e ) => {
              e.preventDefault()
              setPartNumber(partNumber + 1)
            }
          } to="" className="pagination next">вперед
        </Link>
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
