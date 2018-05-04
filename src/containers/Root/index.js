import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from 'containers/Home'
import Signin from 'containers/Signin'
import Signup from 'containers/Signup'
import Page from 'components/HOC/Page'
import initStore from 'reduxStuff/initStore'

const store = initStore()

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Provider>
    );
  }
}

export default Page(Root)
