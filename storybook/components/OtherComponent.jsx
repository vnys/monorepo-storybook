/**
- Use OtherComponent to do other stuff
**/

import React from 'react'
import PropTypes from 'prop-types'

const OtherComponent = ({ children, color }) => (
  <div style={{ color: color }}>{children}</div>
)

OtherComponent.propTypes = {
  /** Defines the color of the text */
  color: PropTypes.string,
  /** This __has__ to be set */
  someRequiredProp: PropTypes.bool.isRequired,
}

OtherComponent.defaultProps = {
  color: 'orange',
}

/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/

export { OtherComponent }
