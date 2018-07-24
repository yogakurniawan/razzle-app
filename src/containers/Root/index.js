import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Cookie from 'js-cookie'
import { signOut } from 'actions/auth'
import Home from 'containers/Home'
import Signin from 'containers/Signin'
import Signup from 'containers/Signup'
import Navbar from 'components/Navbar'
import Page from 'components/HOC/Page'
import { loadItem, removeItem } from 'utils/localStorage'
import initStore from 'reduxStuff/initStore'
import { PrivateRoute, AuthRoute } from '../../routes'

const store = initStore()

class Root extends Component {
  static getInitialProps(props) {
    let userData
    if (process.env.BUILD_TARGET === 'client') {
      userData = loadItem('userData')
    } else {
      const cookies = props.req.headers.cookie;
      const userCookie = cookies.split(";").find(c => c.trim().startsWith("userData="))
      userData = JSON.parse(decodeURIComponent(userCookie.split('=')[1]))
    }
    console.log('hello')
    return {
      isSignedIn: Boolean(userData)
    }
  }

  logout = (store) => {
    const { history } = this.props
    removeItem('userData')
    Cookie.remove('userData')
    store.dispatch(signOut())
    history.push('/signin')
  }

  render() {
    const { isSignedIn } = this.props
    return (
      <Provider store={store}>
        <div>
          { isSignedIn && <Navbar logout={() => this.logout(store)} /> }
          <PrivateRoute isSignedIn={isSignedIn} exact path="/" component={Home} />
          <AuthRoute isSignedIn={isSignedIn} exact path="/signin" component={Signin} />
          <AuthRoute isSignedIn={isSignedIn} exact path="/signup" component={Signup} />
        </div>
      </Provider>
    );
  }
}

export default Page(Root)
