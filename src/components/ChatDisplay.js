import React from 'react'

import ChatWindowContainer from '../containers/ChatWindowContainer'
import NewMessageContainer from '../containers/NewMessageContainer'

const ChatDisplay = ({chat, userId, selectChat, handleReceivedMessage}) => (
  <div id='chat-display'>
    <button onClick={() => selectChat(null)}>Back to chat list</button>
    <ChatWindowContainer
      messages={chat.messages}
      chat={chat}
      userId={userId}
      handleReceivedMessage={handleReceivedMessage}
    />
    <NewMessageContainer chat={chat} />
  </div>
)

export default ChatDisplay
