import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from 'components/Navbar'
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