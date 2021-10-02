import React from 'react'
import {Link} from 'react-router-dom'

import './BlogItem.css'

const BlogItem = () => {
  return (
    <div className="list_item clearfix">

      <h4 className="title"><Link to="/user/1/blog_item">Как создать самый лучший в мире сайт (часть 1).</Link></h4>
      <p className="text">Скидка на все меню, кроме табачных изделий, сока и водки. Не действует на другие спецпредложения, не суммируется с другими скидками...</p>

      <span className="date">10.10.2014</span>
      <Link className="delete" to="#">Удалить запись</Link>

      <Link className="category" to="#">Общество</Link>
      <Link className="comments" to="#">14 комментариев</Link>

    </div>
  )
}

export default BlogItem
