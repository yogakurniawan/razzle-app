import React, { Component } from 'react'
import { connect } from 'react-redux'
import Auth from 'components/Auth'
import AuthForm from 'components/Auth/AuthForm'
import * as authActions from 'actions/auth'

class Signup extends Component {
  state = {}

  onSubmit = async (values) => {
    const { signup, error } = this.props
    const { email, password } = values
    await signup(email, password)
    if (error) {
      return Promise.reject(error)
    } else {
      return Promise.resolve()
    }
  }

  render() {
    const AuthFormComponent = () => (
      <AuthForm history={this.props.history} authType="signup" onSubmit={this.onSubmit} /> 
    )
    return (
      <Auth form={AuthFormComponent} />
    )
  }
}

const mapDispatchToProps = {
  signup: authActions.signup
}

const mapStateToProps = (state) => ({
  error: state.auth.error
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)