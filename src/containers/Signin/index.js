import React, { Component } from 'react'
import Auth from 'components/Auth'
import AuthForm from 'components/Auth/AuthForm'

class Signin extends Component {
  state = {}

  onSubmit = (event) => {
    event.preventDefault()
    console.log(this)
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
 
export default Signin