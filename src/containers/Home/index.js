import React, { Component } from 'react'
import { DownloadButton } from '../../components/Button'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <DownloadButton>Download</DownloadButton>
      </div>
    );
  }
}

export default Home;
