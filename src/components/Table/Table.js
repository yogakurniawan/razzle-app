import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import { Card, Table } from './Styled'

export default class TableComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data
    }
  }

  render() {
    const { columns, keyField } = this.props
    return (
      <Card>
        <Table>
          <Header
            columns={columns}
          />
          <Body
            data={this.state.data}
            columns={columns}
            keyField={keyField}
          />
        </Table>
      </Card>
    )
  }
}