import React, { Component } from 'react'
import Auth from 'components/Auth'
import AuthForm from 'components/Auth/AuthForm'

class Signup extends Component {
  state = {}

  onSubmit = (event) => {
    event.preventDefault()    
  }

  render() {
    const AuthFormComponent = () => (
      <AuthForm authType="signup" onSubmit={this.onSubmit} /> 
    )
    return (
      <Auth form={AuthFormComponent} />
    )
  }
}
 
export default Signup