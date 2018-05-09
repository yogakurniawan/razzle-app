import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'components/Button'
// import Navbar from 'components/Navbar'
import Navbar from 'components/Navbar/NavbarBulma'
import { auth } from 'config/firebase'
import * as patientActions from 'actions/patient'
import * as authActions from 'actions/auth'

class Home extends Component {

  handleClick = () => {
    const { createPatient, history } = this.props
    createPatient('yoga kurniawan', 'asgard')
    history.push('/')
  }

  handleSignout = () => {
    auth.doSignOut()
  }

  render() {
    return (
      <div>
        <Navbar />
        <ul>
          <li><Link to="/sandwiches">Sandwiches</Link></li>
          <li><Link to="/tacos">Tacos</Link></li>
        </ul>
        <div style={{ marginLeft: 10 }}>
          <Button color="primary" onClick={this.handleSignout}>
            Signout
          </Button>
          <Button color="primary" onClick={this.handleClick}>
            Save
          </Button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  // makeASandwichWithSecretSauce: actions.makeASandwichWithSecretSauce,
  // makeASandwich: actions.makeASandwich,
  createPatient: patientActions.createPatient,
  signin: authActions.signin
}

const mapStateToProps = (state) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)