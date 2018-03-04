import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DownloadButton } from '../../components/Button'

class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/sandwiches">Sandwiches</Link></li>
          <li><Link to="/tacos">Tacos</Link></li>
        </ul>
        <DownloadButton>Download</DownloadButton>
      </div>
    );
  }
}

export default Home;
