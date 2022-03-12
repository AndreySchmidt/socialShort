import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = ( state ) => {
  return {
    isAuth: state.commonReducer.isAuth,
  }
}

const AuthRedirect = ( SomeComponent ) => {
  const WithAuthRedirect = ( props ) => {
    if ( !props.isAuth ) {
      return <Redirect to = "/" />
    }
    
    return <SomeComponent { ...props } />
  }

  return connect( mapStateToProps )( WithAuthRedirect )
}

export default AuthRedirect
