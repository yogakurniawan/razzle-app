import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Tacos from './containers/Tacos'
import Bus from './components/Bus'
import Cart from './components/Cart'
import Sandwiches from './components/Sandwiches'

const routes = [
  {
    path: '/',
    component: Bus
  },
  {
    path: '/sandwiches',
    component: Sandwiches
  },
  {
    path: '/tacos',
    component: Tacos,
    routes: [
      { path: '/tacos/bus',
        component: Bus
      },
      { path: '/tacos/cart',
        component: Cart
      }
    ]
  }
]

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
export const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

export default routes