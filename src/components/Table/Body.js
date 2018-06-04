import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'
import { get } from './utils'

const Body = (props) => {
  const {
    columns,
    data,
    keyField
  } = props

  const content = data.map(row => {
    const key = get(row, keyField)
    console.log(key)
    return (
      <Row
        key={key}
        row={row}
        columns={columns}
      />
    )
  })

  return (
    <tbody>{content}</tbody>
  )
}

Body.propTypes = {
  keyField: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
}

export default Body
