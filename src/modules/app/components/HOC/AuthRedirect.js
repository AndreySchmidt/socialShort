import React from 'react'
import {Redirect} from 'react-router-dom'

const AuthRedirect = ( SomeComponent ) => {
  const WithAuthRedirect = ( props ) => {
    if ( !props.isAuth ) {
      return <Redirect to = "/" />
    }
    return <SomeComponent { ...props } />
  }

  return WithAuthRedirect
}

export default AuthRedirect
