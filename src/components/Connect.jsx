import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import Chat from './Chat'
import MyProfile from '../components/MyProfile'

// https://www.youtube.com/watch?v=E3NHd-PkLrQ&ab_channel=TraversyMedia

const Connect = () => {
  const [connected, setConnected] = useState(false)
  return (
    <>
      {connected ? (
        <Chat setConnected={setConnected} />
      ) : (
        <div className="profile-page">
            <MyProfile />
            <Button onClick={() => setConnected(true)} color="brown">
              Connect
          </Button>
          </div>
        )
      }
    </>

  )
}

export default Connect
