import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {authMe} from './../../../thunk'
// import {setMyUserData} from './../../../actions'


const HomePage = ({authMe, isAuth, login, id}) => {
  useEffect(
    () => {
      authMe()
    }, []
  )

  return (
    <h3>{ (login)? <Link to={'/user/'+ id} >{login}</Link> : <Link to="/user/22510">user (personalAccount)</Link> }</h3>
  )
}


const mapStateToProps = (state) => {
  return {
    id: state.commonReducer.id,
    login: state.commonReducer.login,
    isAuth: state.commonReducer.isAuth,
  }
}

export default connect(mapStateToProps, {authMe})(HomePage)
