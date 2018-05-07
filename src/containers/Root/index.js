import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from 'containers/Home'
import Signin from 'containers/Signin'
import Signup from 'containers/Signup'
import Page from 'components/HOC/Page'
import initStore from 'reduxStuff/initStore'
import { PrivateRoute } from '../../routes'

const store = initStore()

class Root extends Component {
  static getInitialProps(props) {
    console.log(props.req.headers)
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Provider>
    );
  }
}

export default Page(Root)
