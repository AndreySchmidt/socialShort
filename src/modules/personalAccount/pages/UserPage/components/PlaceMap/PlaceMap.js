import React from 'react'

import myplacesample from './../../../../PageLayout/images/my-place-sample.jpg'
import myplacesampleimg from './../../../../PageLayout/images/my-place-sample-img.png'

const styleConfig = {top: '58px', left: '191px'}

const PlaceMap = () => {
  return (
    <div className="c_place_map">
      <img src={myplacesample} alt="" />
      <div className="photo_tooltip" style={styleConfig}>
        <img src={myplacesampleimg} alt="" />
      </div>
    </div>
  )
}

export default PlaceMap
