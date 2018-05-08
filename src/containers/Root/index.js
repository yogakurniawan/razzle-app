import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from 'containers/Home'
import Signin from 'containers/Signin'
import Signup from 'containers/Signup'
import Page from 'components/HOC/Page'
import { loadItem } from 'utils/localStorage'
import initStore from 'reduxStuff/initStore'
import { PrivateRoute } from '../../routes'

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
    return {
      isSignedIn: !!userData
    }
  }

  render() {
    const { isSignedIn } = this.props
    return (
      <Provider store={store}>
        <div>
          <PrivateRoute isSignedIn={isSignedIn} exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Provider>
    );
  }
}

export default Page(Root)
