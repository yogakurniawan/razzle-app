// ./src/Home.js
import React from 'react';
import { NavLink } from 'react-router-dom'
import Routes, { RouteWithSubRoutes } from '../../routes'


const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li><NavLink to="/tacos/bus">Bus</NavLink></li>
      <li><NavLink to="/tacos/cart">Cart</NavLink></li>
    </ul>
  </div>
)

export default Tacos;