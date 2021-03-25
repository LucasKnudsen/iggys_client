import React, { useState, useEffect } from 'react'
import { Button, Grid, Input, Segment } from 'semantic-ui-react'
import { createMessage, getMessages } from '../modules/messagesServices'
import { useSelector } from 'react-redux'


const Chat = () => {
  const { user } = useSelector(state => state)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    getMessages(setMessages)
  }, [])

  const messageList = messages.map(message => {
    return (
      <Grid.Row textAlign="right" style={{
        background: user.id === message.user_id ? 'green' : 'grey',
        color: user.id === message.user_id ? 'white' : 'black',
        textAlign: user.id === message.user_id ? 'right' : 'left',
        padding: 20, borderRadius: 7, margin: '10px 25px', flex: '100%', fontSize: 15
      }}
      >
        { message.content}
      </Grid.Row  >
    )
  })

  return (
    <Grid >
      <Grid.Row>
        <div style={{ display: 'flex', width: '100%', flexFlow: 'wrap' }} >
          {messageList}
        </div >
      </Grid.Row>
      <Grid.Row centered>
        <Input

          name="message"
          placeholder="Type a message!"
          onChange={(event) => { setInput(event.target.value) }}
        />
        <Button onClick={() => createMessage(input)}>Send!</Button>
      </Grid.Row>
    </Grid>
  )
}

export default Chat
