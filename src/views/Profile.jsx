import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Connect from '../components/Connect'
import LogIn from '../components/LogIn'
import MyProfile from '../components/MyProfile'
import { authValidation } from '../modules/authenticationServices'

const Profile = () => {
  const { authenticated } = useSelector(state => state)

  useEffect(() => {
    authValidation()
  }, [])

  return (
    <div className="main-container profile">
      {authenticated ? (
        <div className="profile-page">
          <MyProfile />
          <Connect />
        </div>
      ) : (
          <div className="login-container">
            <LogIn />
          </div>
        )
      }
    </div >
  )
}

export default Profile
