import React from 'react'

import ChatWindow from './ChatWindow'
import NewMessageContainer from '../containers/NewMessageContainer'

const ChatDisplay = ({chat, userId, handleReceivedMessage}) => (
  <div id='chat-display'>
    <ChatWindow
      messages={chat.messages}
      chat={chat}
      userId={userId}
      handleReceivedMessage={handleReceivedMessage}
    />
    <NewMessageContainer chat={chat} />
  </div>
)

export default ChatDisplay
