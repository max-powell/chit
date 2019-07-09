import React from 'react'

import Cable from './Cable'
import ChatWindow from './ChatWindow'
import NewMessageContainer from '../containers/NewMessageContainer'

const ChatDisplay = ({chat, userId, handleReceivedMessage}) => (
  <div id='chat-display'>
    <Cable chat={chat} handleReceivedMessage={handleReceivedMessage} />
    <ChatWindow messages={chat.messages} userId={userId} />
    <NewMessageContainer chat={chat} />
  </div>
)

export default ChatDisplay
