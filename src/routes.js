import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Tacos from './containers/Tacos'
import Sandwiches from './components/Sandwiches'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/sandwiches',
    component: Sandwiches
  },
  {
    path: '/tacos',
    component: Tacos
  }
]

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
export const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact={route.exact} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

export default routes