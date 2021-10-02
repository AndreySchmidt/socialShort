import React from 'react'
import {Link} from 'react-router-dom'

import friend1 from './../../../../PageLayout/images/friend-1.jpg'
import friend2 from './../../../../PageLayout/images/friend-2.jpg'
import friend3 from './../../../../PageLayout/images/friend-3.jpg'

const FriendsPhotoList = () => {
  return (
    <div className="c_friends_photo_list clearfix">
      <Link to=""><img src={friend1} alt="" /></Link>
      <Link to=""><img src={friend3} alt="" /></Link>
      <Link to=""><img src={friend2} alt="" /></Link>
      <Link to=""><img src={friend2} alt="" /></Link>
      <Link to=""><img src={friend1} alt="" /></Link>
      <Link to=""><img src={friend3} alt="" /></Link>
      <Link to=""><img src={friend3} alt="" /></Link>
      <Link to=""><img src={friend1} alt="" /></Link>
      <Link to=""><img src={friend2} alt="" /></Link>
    </div>
  )
}

export default FriendsPhotoList
