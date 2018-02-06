// ./src/Home.js
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Bus from '../../components/Bus'
import Cart from '../../components/Cart'

class Tacos extends Component {
  render() {
    return (
      <div>
        <h1>Tacos</h1>
        <ul>
          <li><Link to="/tacos/bus">Bus</Link></li>
          <li><Link to="/tacos/cart">Cart</Link></li>
        </ul>
        <Route path="/tacos/bus" render={props => <Bus />}/>
        <Route path="/tacos/cart" render={props => <Cart />}/>
      </div>
    );
  }
}

export default Tacos;