import React from 'react'
import { asyncComponent } from '@jaredpalmer/after'
import { Route } from 'react-router-dom'
import Signup from 'containers/Signup'
import Signin from 'containers/Signin'
import Root from 'containers/Root'

const routes = [
  {
    path: '/',
    component: Root, //  providers could go here and RootLayout if needed 
  },
  {
    path: '/signin',
    exact: true,
    component: Signin
  },
  {
    path: '/signup',
    exact: true,
    component: Signup
  },
  {
    path: '/sandwiches',
    component: asyncComponent({
      loader: () => import('./components/Sandwiches'), // required
      placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
    })
  },
  {
    path: '/tacos',
    component: asyncComponent({
      loader: () => import('./containers/Tacos'), // required
      placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
    })
  }
]

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
export const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact={route.exact} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes} />
  )} />
)

export default routes