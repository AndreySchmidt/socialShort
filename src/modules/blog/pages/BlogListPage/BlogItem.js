import React from 'react'
import {Link} from 'react-router-dom'

const BlogItem = (props) => {
  return (
    <>
    <div className="blog_announce clearfix">
      <Link className="author-photo" to="#"><img src="images/pic-ava-100x100.jpg" title="Елизавета Владимировна" alt="Елизавета Владимировна" /></Link>
      <Link className="author-name" to="#">{props.name}</Link><br />
      {props.online && <span className="status online">online</span>}
      {!props.online && <span className="status offline">offline</span>}
      <h3 className="title"><Link to="/blog_item">{props.subject}</Link></h3>
      <div className="text">{props.description}</div>
      <div className="completive">
        <span className="date">{props.dateTime}</span>
        <Link to="">{props.category}</Link>
        <Link to="">{props.commentQuan} комментариев</Link>
      </div>
    </div>
    <div className="dot-line"></div>
    </>
  )
}

export default BlogItem
