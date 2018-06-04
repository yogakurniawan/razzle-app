import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get } from './utils'
import { Td } from './Styled'

class Cell extends Component {
  render() {
    const {
      row,
      column
    } = this.props
    const {
      dataField
    } = column
    const content = get(row, dataField)
    return (
      <Td>
        {typeof content === 'boolean' ? `${content}` : content}
      </Td>
    )
  }
}

Cell.propTypes = {
  row: PropTypes.object.isRequired,
  column: PropTypes.object.isRequired
}

export default Cell