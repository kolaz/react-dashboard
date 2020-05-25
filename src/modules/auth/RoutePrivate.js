// Imports
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

// App Imports
import user from '../../setup/routes/user'
import Dashboard from '../../setup/layouts'

// Component
const RoutePrivate = ({ role, component, ...props }) => {
  const { isAuthenticated, details } = useSelector(state => state.auth)

  return (
    isAuthenticated
      ? role
        ? details.user.role === role
          ? <Route {...props} component={Dashboard}/>
          : <Redirect to={user.userLogin.path}/>
        : <Route {...props} component={Dashboard}/>
      : <Redirect to={user.userLogin.path}/>
  )
}

export default RoutePrivate
