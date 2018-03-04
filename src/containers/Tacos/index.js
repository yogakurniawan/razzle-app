import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { asyncComponent } from '@jaredpalmer/after'

class Tacos extends Component {
  render() {
    return (
      <div>
        <h1>Tacos</h1>
        <ul>
          <li><Link to="/tacos/bus">Bus</Link></li>
          <li><Link to="/tacos/cart">Cart</Link></li>
        </ul>
        <Route path="/tacos/bus" component={asyncComponent({
          loader: () => import('../../components/Bus'), // required
          placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
        })} />
        <Route path="/tacos/cart" component={asyncComponent({
          loader: () => import('../../components/Cart'), // required
          placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
        })} />
      </div>
    );
  }
}

export default Tacos