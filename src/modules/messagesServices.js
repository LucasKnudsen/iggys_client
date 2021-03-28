import axios from 'axios'

const getMessages = async (setMessages) => {
  let response = await axios.get('/messages')
  setMessages(response.data.messages)
}

const createMessage = async (content, setInput) => {
  let auth_headers = JSON.parse(localStorage.getItem('J-tockAuth-Storage'))
  await axios.post('/messages', { content: content }, { headers: auth_headers })
  setInput('')
}

export { getMessages, createMessage }