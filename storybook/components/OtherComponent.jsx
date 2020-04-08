import React from 'react'
import PropTypes from 'prop-types'

const OtherComponent = ({ children, color }) => (
  <div style={{ color: color }}>{children}</div>
)

OtherComponent.propTypes = {
  /** Defines the color of the text */
  color: PropTypes.string,
}

OtherComponent.defaultProps = {
  color: 'orange',
}

export { OtherComponent }
