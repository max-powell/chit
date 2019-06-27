import React from 'react'

import Message from './Message'

const ChatWindow = ({messages}) => (
  <div id='chat-window'>
    {
      messages.map(m => <Message key={m.id} message={m}/>)
    }
  </div>
)

export default ChatWindow
