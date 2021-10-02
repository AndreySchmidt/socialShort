import React from 'react'

import PostComment from './../PostComment/PostComment'
import WallPostsItem from './../WallPostsItem/WallPostsItem'

const Wall = () => {
  return (
    <div className="c_wall">
      <PostComment />
      <div className="wall_posts">
        <WallPostsItem />
      </div>
    </div>
  )
}

export default Wall
