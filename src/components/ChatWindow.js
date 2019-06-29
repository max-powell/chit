import React from 'react'

import Message from './Message'

const ChatWindow = ({messages, userId}) => (
  <div id='chat-window'>
    {
      messages.map(m => <Message key={m.id} message={m} userId={userId} />)
    }
  </div>
)

export default ChatWindow
