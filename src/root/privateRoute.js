import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from './auth'

const Private = ({ children, component: Component, location, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      if (auth.isAuthenticated) {
        if ("/" + localStorage.getItem('token') === location.pathname) {
          return (<Component {...props} />)
        }
        else {
          alert('not auth');
          return <Redirect to="/login" />
        }
      } else {
        alert('not auth');
        return (
          <Redirect to="/login" />
        )
      }
    }} />
  )
}

export default Private