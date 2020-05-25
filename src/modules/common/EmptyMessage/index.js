// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports


// Component
const EmptyMessage = ({ message, classes }) => (
  <div>
    { message }
    </div>
)

// Component Properties
EmptyMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string,
}

// Component Default Properties
EmptyMessage.defaultProps = {
  message: 'No data to show'
}

export default EmptyMessage
