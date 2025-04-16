import React, { useContext } from 'react'
import {UserContext} from '../UserContext/UserContext'


function Profile() {
   const {user} = useContext(UserContext)

   if(!user) return <div>Please Login</div>
  return (
   <div> Welcome {user.name} with password {user.password}</div>
  )
}

export default Profile