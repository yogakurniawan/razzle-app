import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DownloadButton, ThemedButton, Button } from 'components/Button'
import Page from 'components/HOC/Page'

class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/sandwiches">Sandwiches</Link></li>
          <li><Link to="/tacos">Tacos</Link></li>
        </ul>
        <DownloadButton>Download</DownloadButton>
        <ThemedButton>Themed</ThemedButton>
        <Button>Themed</Button>
      </div>
    );
  }
}

export default Page(Home);
