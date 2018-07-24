import React from 'react'
import PropTypes from 'prop-types'
import { Col } from './Styled'

const ColGroup = (props) => {
  const {
    columns
  } = props

  return (
    <colgroup>
      {
        columns.map(column => {
          if (!column.hidden) {
            return (
              <Col width={column.width} key={column.text} />
            )
          }
          return false
        })
      }
    </colgroup>
  )
}

ColGroup.propTypes = {
  columns: PropTypes.array.isRequired
}

export default ColGroup
