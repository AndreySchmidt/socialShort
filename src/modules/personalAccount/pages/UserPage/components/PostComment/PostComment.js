import React from 'react'
import {Link} from 'react-router-dom'

import wallavatar2 from './../../../../PageLayout/images/wall-avatar-2.jpg'

import PostCommentArea from './../PostCommentArea/PostCommentArea'

const PostComment = ({whithUserData}) => {
  return (
    <div className="post_comment">

      {whithUserData &&
        <Link className="user_avatar" to=""><img src={wallavatar2} alt="" /></Link>
      }

      <div className="comment_form_wrapper">
        <PostCommentArea />
        <div className="save_button_wrapper">
          <input className="c_wall_button" type="submit" value="Сохранить"/>
          <Link className="pin_to_post" to="">Прикрепить к записи</Link>
        </div>
      </div>

    </div>
  )
}

export default PostComment
