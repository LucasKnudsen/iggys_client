import React, { useState, useEffect } from 'react'
import { Button, Grid, Input } from 'semantic-ui-react'
import { createMessage, getMessages } from '../modules/messagesServices'
import { useSelector } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'


const Chat = (props) => {
  const { user } = useSelector(state => state)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    getMessages(setMessages)
  }, [])

  const handleReceivedMessage = response => {
    if (!messages.some(message => message.id === response.message.id)) {
      setMessages([...messages, response.message])
      debugger
    }
  }

  const messageList = messages.map((message, i) => {
    return (
      <>
        { user.id === message.user_id ? (
          <>
            <Grid.Row key={i} style={{
              background: '#22bb45',
              color: 'white',
              textAlign: 'right',
              padding: 20, borderRadius: 7, margin: '10px 10px 10px 50px', fontSize: 15, width: '80%'
            }}>
              {message.content}
            </Grid.Row>

            <Grid.Row style={{
              background: '#22bb45',
              color: 'white',
              textAlign: 'center',
              padding: 20, borderRadius: '50%', margin: '10px 0', fontSize: 20, width: '10%'
            }}>
              {message.user_name.slice(0, 2).toUpperCase()}
            </Grid.Row>
          </>
        ) : (
            <>
              <Grid.Row style={{
                background: '#CDCDCD',
                color: 'black',
                textAlign: 'center',
                padding: 20, borderRadius: '50%', margin: '10px 10px 10px 50px', fontSize: 20, width: '10%'
              }}>
                {message.user_name.slice(0, 2).toUpperCase()}
              </Grid.Row>
              <Grid.Row key={i} style={{
                background: '#CDCDCD',
                color: 'black',
                textAlign: 'left',
                padding: 20, borderRadius: 7, margin: '10px ', fontSize: 15, width: '80%'
              }}>
                {message.content}
              </Grid.Row>
            </>
          )}
      </>
    )
  })

  return (
    <Grid >
      <ActionCableConsumer
        channel={{ channel: 'MessagesChannel' }}
        onReceived={handleReceivedMessage}
      >
        <Grid.Row style={{ marginTop: 50, overflow: 'auto', display: 'flex', flexDirection: 'column-reverse', maxHeight: '75vh' }}>
          <div style={{ display: 'flex', width: '100%', flexFlow: 'wrap' }} >
            {messageList}
          </div >
        </Grid.Row>
      </ActionCableConsumer>
      <Grid.Row centered>
        <Input

          name="message"
          placeholder="Type a message!"
          value={input}
          onChange={(event) => { setInput(event.target.value) }}
        />
        <Button color="brown" onClick={() => createMessage(input, setInput)}>Send!</Button>
      </Grid.Row>
      <Grid.Row centered>
        <Button onClick={() => props.setConnected(false)}>Go back</Button>
      </Grid.Row>

    </Grid>
  )
}

export default Chat
