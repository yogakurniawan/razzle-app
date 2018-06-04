import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get } from './utils'
import Cell from './Cell'
import { Tr } from './Styled'

class Row extends Component {
  render() {
    const {
      row,
      columns
    } = this.props

    return (
      <Tr>
        {
          columns.map((column, index) => {
            if (!column.hidden) {
              const { dataField } = column;
              const content = get(row, dataField);

              return (
                <Cell
                  key={`${content}-${index}`}
                  row={row}
                  column={column}
                />
              );
            }
            return false;
          })
        }
      </Tr>
    );
  }
}

Row.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired
}

export default Row;
