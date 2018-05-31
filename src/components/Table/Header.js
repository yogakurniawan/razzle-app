import React, { Component } from 'react'
import { Table, Th, Th1 } from './Styled'

class Header extends Component {
  render() {
    return (
      <Table>
        {React.cloneElement(this.props.colGroups, { ref: node => this.headerGrp = node })}
        <thead ref={node => this.header = node}>
          {trs}
        </thead>
      </Table>
    )
  }
}