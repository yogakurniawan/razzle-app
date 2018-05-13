import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPatient } from 'actions/patient'

class Home extends Component {

  state = {
    modalIsOpen: false
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  handleClick = () => {
    const { addPatient, history } = this.props
    addPatient('yoga kurniawan', 'asgard')
    history.push('/')
  }

  render() {
    return (
      <div>
        test
      </div>
    )
  }
}

const mapDispatchToProps = {
  addPatient: createPatient
}

const mapStateToProps = (state) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)