// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Provider as StateProvider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import isFunction from 'lodash/isFunction'

// UI Imports
import './setup/scss/styles.scss'


// App Imports
import store from './setup/store'
import routes from './setup/routes'
import Redirector from './modules/common/Redirector'
import RoutePrivate from './modules/auth/RoutePrivate'


ReactDOM.render(
  <StateProvider store={store}>
    <Router>
      <Switch>
        {
          Object.values(routes).map((route, index) => (
            route.auth
              ? <RoutePrivate
                {...route}
                key={index}
                exact={route.exact}
                path={isFunction(route.path) ? route.path() : route.path}
                />
              : <Route
                {...route}
                key={index}
                exact={route.exact}
                path={isFunction(route.path) ? route.path() : route.path}
                />
              ))
        }
        <Route component={Redirector} />
      </Switch>
    </Router>
  </StateProvider>,
  document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
