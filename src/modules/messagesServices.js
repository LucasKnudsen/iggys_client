import axios from 'axios'
import store from '../state/store/configureStore'

const getMessages = async (setMessages) => {
  let response = await axios.get('/messages')
  debugger
  setMessages(response.data.messages)
}

const createMessage = async (content) => {
  let auth_headers = JSON.parse(localStorage.getItem('J-tockAuth-Storage'))
  let response = await axios.post('/messages', { content: content }, { headers: auth_headers })

}

export { getMessages, createMessage }