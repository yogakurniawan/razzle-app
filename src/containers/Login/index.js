import React, { Component } from 'react'
import { Button } from 'components/Button'
import Page from 'components/HOC/Page'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import LogoBar from './LogoBar'

class Login extends Component {
  render() {
    return (
      <Grid fluid>
        <LogoBar />
        <Row>
          <Col xs={6} md={3}>
            <Button color="main" outline>Login</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Page(Login);