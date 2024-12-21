//import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react'
import PropTypes from 'prop-types'


const UserContextProvider = ({children}) => {
  // Initial state of user is set to null to indicate no user is logged in
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>
  )
}
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}


export default UserContextProvider;