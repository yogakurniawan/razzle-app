import React from 'react'
import PropTypes from 'prop-types'
import { Th } from './Styled'

const Header = (props) => {
  const {
    columns
  } = props

  return (
    <thead>
      <tr>
        {
          columns.map(column => {
            if (!column.hidden) {
              return (
                <Th>
                  {column.text}
                </Th>
              )
            }
            return false
          })
        }
      </tr>
    </thead>
  )
}

Header.propTypes = {
  columns: PropTypes.array.isRequired
}

export default Header
