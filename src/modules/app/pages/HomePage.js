import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {authMe} from './../../../thunk'
// import {setMyUserData} from './../../../actions'


const HomePage = ({authMe}) => {
  useEffect(
    () => {
      authMe()
    }, []
  )

    return <Link to="/user/22510">user (personalAccount)</Link>
}

const mapStateToProps = (state) => {
  return {
    // userId: state.personalAccountReducer.userId,
  }
}

export default connect(mapStateToProps, {authMe})(HomePage)
