import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { Button } from 'components/Button'
import Circular from 'components/Spinner/Circular'
// import * as actions from 'actions/global'
import * as authActions from 'actions/auth'

class Home extends Component {

  handleClick = () => {
    const { signin } = this.props
    signin('yogaygk@gmail.com', 'test1234')
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/sandwiches">Sandwiches</Link></li>
          <li><Link to="/tacos">Tacos</Link></li>
        </ul>
        <div style={{ marginLeft: 10 }}>
          <Button color="primary">
            <Circular size="1.5rem" color="#fff" />
          </Button>
          <Button color="primary" onClick={this.handleClick}>
            Save
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  // makeASandwichWithSecretSauce: actions.makeASandwichWithSecretSauce,
  // makeASandwich: actions.makeASandwich,
  signin: authActions.signin
}

const mapStateToProps = (state) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)