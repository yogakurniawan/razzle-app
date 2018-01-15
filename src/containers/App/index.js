import React from 'react'
import Switch from 'react-router-dom/Switch'
import Routes, { RouteWithSubRoutes } from '../../routes'
import './App.css'

const App = () => (
  <Switch>
    {
      Routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))
    }
  </Switch>
);

export default App;
