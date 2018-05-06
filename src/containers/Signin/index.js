import React, { Component } from 'react'
import { connect } from 'react-redux'
import Auth from 'components/Auth'
import AuthForm from 'components/Auth/AuthForm'
import * as authActions from 'actions/auth'

class Signin extends Component {

  onSubmit = async (values) => {
    const { signin, error } = this.props
    const { email, password } = values
    await signin(email, password)
    if (error) {
      return Promise.reject(error)
    } else {
      return Promise.resolve()
    }
  }

  render() {
    // const { isSigningIn } = this.props
    const AuthFormComponent = () => (
      <AuthForm authType="signin" onSubmit={this.onSubmit} />
    )
    return (
      <React.Fragment>
        <Auth form={AuthFormComponent} />
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  signin: authActions.signin
}

const mapStateToProps = (state) => ({
  error: state.auth.error
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin)