import React from 'react'
import PropTypes from 'prop-types'

const SomeComponent = ({ children, color }) => (
  <div style={{ color: color }}>{children}</div>
)

SomeComponent.propTypes = {
  /** Defines the color of the text */
  color: PropTypes.string,
}

SomeComponent.defaultProps = {
  color: 'orange',
}

export { SomeComponent }
