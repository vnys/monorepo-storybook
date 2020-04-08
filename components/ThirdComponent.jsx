/**
 * - Use ThirdComponent to do some stuff
 */

import React from 'react'
import PropTypes from 'prop-types'

const ThirdComponent = ({ children, color }) => (
  <div style={{ color: color }}>{children}</div>
)

ThirdComponent.propTypes = {
  /** Defines the color of the text */
  color: PropTypes.string,
}

ThirdComponent.defaultProps = {
  color: 'orange',
}

export { ThirdComponent }
