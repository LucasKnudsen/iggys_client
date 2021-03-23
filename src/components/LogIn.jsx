import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { signInUser } from '../modules/authenticationServices'
import { Button, Modal, Form, Grid, Header, Message, Segment, Input } from 'semantic-ui-react'
import store from '../state/store/configureStore'

const LogIn = () => {
  const [open, setOpen] = useState(false)
  const { errorMessage } = useSelector(state => state)
  return (
    <Modal
      onClose={() => {
        setOpen(false)
        store.dispatch({ type: "RESET_ERROR" })
      }}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color="brown" data-cy="register-button">Log In</Button>}
    >
      <Grid className="login-modal" textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='blue' textAlign='center'>
            Login to view the latest crypto news!
            </Header>
          {errorMessage &&
            <p data-cy="error-message">{errorMessage}</p>
          }
          <Form onSubmit={(event) => signInUser(event, setOpen)} data-cy='registration-form' size='large'>
            <Segment stacked>
              <Form.Field
                data-cy='email-field'
                name="email"
                control={Input}
                type="email"
                label='email'
                placeholder='email'
              />
              <Form.Field
                data-cy='password-field'
                name="password"
                control={Input}
                type="password"
                label='password'
                placeholder='password'
              />
              <Button data-cy='submit' color="blue" type='submit'>Register!</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Modal>
  )
}

export default LogIn
