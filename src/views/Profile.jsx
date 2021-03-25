import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Connect from '../components/Connect'
import LogIn from '../components/LogIn'
import MyProfile from '../components/MyProfile'
import { authValidation } from '../modules/authenticationServices'
import { motion } from 'framer-motion'

const Profile = () => {
  const { authenticated } = useSelector(state => state)

  useEffect(() => {
    authValidation()
  }, [])

  return (
    <motion.div className="main-container profile">
      {authenticated ? (
        <Connect />
      ) : (
          <div className="login-container">
            <LogIn />
          </div>
        )
      }
    </motion.div >
  )
}

export default Profile
