import React from 'react'
import { asyncComponent } from '@jaredpalmer/after'
import { Route } from 'react-router-dom'

const routes = [
  {
    path: '/signin',
    exact: true,
    component: asyncComponent({
      loader: () => import('./containers/Signin'), // required
      placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
    })
  },
  {
    path: '/signup',
    exact: true,
    component: asyncComponent({
      loader: () => import('./containers/Signup'), // required
      placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
    })
  },
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./containers/Home'), // required
      placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
    })
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
    <route.component {...props} routes={route.routes}/>
  )}/>
)

export default routes