import React from 'react'

import './search.css'

const Search = () => {
  return (
    <div className="c_blog_search">
      <form action="#" method="GET">
        <div className="search_form">
          <input className="search_query" type="text" placeholder="поиск" />
          <input className="search_submit" type="submit" value="Найти" />
        </div>
      </form>
    </div>
  )
}

export default Search
