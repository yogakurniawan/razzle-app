import React, { Component } from 'react'
import Page from 'components/HOC/Page'
import LogoBar from './LogoBar'
import LoginBox from './LoginBox'
import Grid from './Grid'
import Footer from './Footer'

class Login extends Component {
  render() {
    return (
      <div>
        <Grid fluid>
          <LogoBar />
          <LoginBox />
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default Page(Login);