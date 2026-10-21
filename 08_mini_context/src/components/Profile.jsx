import React, {useContext} from 'react'
import { usercontext } from '../context/UserContext'

function Profile() {
    const { user } = useContext(usercontext)
  return (
    
    if ( !user ) return <div>Please LOgin</div>
      
    return <div>Welcomw {user.username}</div>
  )
}

export default Profile