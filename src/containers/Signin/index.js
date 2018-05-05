import React, { Component } from 'react'
import { connect } from 'react-redux'
import Auth from 'components/Auth'
import AuthForm from 'components/Auth/AuthForm'
import * as authActions from 'actions/auth'

class Signin extends Component {

  onSubmit = (values) => {
    const { signin } = this.props
    const { email, password } = values
    signin(email, password)
  }

  render() {
    const { isSigningIn } = this.props
    const AuthFormComponent = () => (
      <AuthForm isSubmitting={isSigningIn} authType="signin" onSubmit={this.onSubmit} />
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
  isSigningIn: state.auth.loading
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin)