import React, { useState } from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return (
        <h2 className='text-2xl text-white'>Please Login</h2>
    )
  return (
     <div>
        Welcome {user.username}
     </div>
  )
}

export default Profile