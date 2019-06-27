import React from 'react'

import ChatWindow from './ChatWindow'
import NewMessageContainer from '../containers/NewMessageContainer'

const ChatDisplay = ({chat}) => (
  <div id='chat-display'>
    <ChatWindow messages={chat.messages} />
    <NewMessageContainer chat={chat} />
  </div>
)

export default ChatDisplay
