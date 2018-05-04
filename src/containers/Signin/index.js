import React, { Component } from 'react'
import { connect } from 'react-redux'
import Auth from 'components/Auth'
import AuthForm from 'components/Auth/AuthForm'
import * as authActions from 'actions/auth'

class Signin extends Component {
  state = {}

  onSubmit = (event) => {
    debugger;
    event.preventDefault()
    const { signin } = this.props
    signin('yogaygk@gmail.com', 'test1234')
  }

  render() {
    const AuthFormComponent = () => (
      <AuthForm authType="signin" onSubmit={this.onSubmit} /> 
    )
    return (
      <Auth form={AuthFormComponent} />
    )
  }
}

const mapDispatchToProps = {
  signin: authActions.signin
}

const mapStateToProps = (state) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin)