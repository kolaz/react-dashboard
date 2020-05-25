// Imports
import React from 'react'
import { useSelector } from 'react-redux'

// UI Imports


// App Imports


// Component
const UserProfile = ({ classes }) => {
  // state
  const { details } = useSelector(state => state.auth)

  return (
    <div>
        { details.user.first_name} {details.user.last_name}
        { details.user.email }
        { details.user.gender }
        { details.user.date_joined }
    </div>
  )
}

// Component Properties


export default UserProfile
