import React from 'react'
import { asyncComponent } from '@jaredpalmer/after'
import { Route, Redirect } from 'react-router-dom'
import { loadItem } from 'utils/localStorage'
import Root from 'components/Root'

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
  }
]

export const PrivateRoute = ({ component: Component, isSignedIn, ...rest }) => (
  <Route {...rest} render={(props) => {
    let authorized
    if (isSignedIn === undefined) {
      authorized = process.env.BUILD_TARGET === 'client' && Boolean(loadItem('userData'))
    } else {
      authorized = isSignedIn
    }
    return (authorized ? <Component {...props} /> : <Redirect to='/signin' />)
  }} />
)

export const AuthRoute = ({ component: Component, isSignedIn, ...rest }) => (
  <Route {...rest} render={(props) => {
    let authorized
    if (isSignedIn === undefined) {
      authorized = process.env.BUILD_TARGET === 'client' && Boolean(loadItem('userData'))
    } else {
      authorized = isSignedIn
    }
    return (authorized ? <Redirect to='/' /> : <Component {...props} />)
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