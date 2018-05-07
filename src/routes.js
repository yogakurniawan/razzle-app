import React from 'react'
import { asyncComponent } from '@jaredpalmer/after'
import { Route, Redirect } from 'react-router-dom'
import { loadItem } from 'utils/localStorage'
import Root from 'containers/Root'

const routes = [
  {
    path: '/',
    component: Root, //  providers could go here and RootLayout if needed 
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

export const PrivateRoute = ({ component: Component, userCookie, ...rest }) => (
  <Route {...rest} render={(props) => {
    let userData
    if (process.env.BUILD_TARGET === 'client') {
      userData = loadItem('userData')
    } else {
      userData = userCookie
    }
    console.log(userCookie)
    console.log(userCookie)
    return (userData ? <Component {...props} /> : <Redirect to='/signin' />)
  }} />
)

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
export const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact={route.exact} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes} />
  )} />
)

export default routes