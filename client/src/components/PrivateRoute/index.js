import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import privateHelpers from './helpers/private.helper'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest} 
    render={(props) => (
      
      privateHelpers.isLoggedIn()
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
  )} />
)
