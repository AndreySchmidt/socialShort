import React from 'react'
import {Link} from 'react-router-dom'

const JumpToTopBtn = () => {
  return(
    <div className="c_jump_to_top">
        <Link to="#"><i></i>Наверх<i></i></Link>
    </div>
  )
}

export default JumpToTopBtn
