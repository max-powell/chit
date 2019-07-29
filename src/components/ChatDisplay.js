import React from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider'

import ChatWindowContainer from '../containers/ChatWindowContainer'
import NewMessageContainer from '../containers/NewMessageContainer'

const ChatDisplay = ({chat, userId, selectChat, handleReceivedMessage}) => (
  <div id='chat-display'>
    <button onClick={() => selectChat(null)}>Back to chat list</button>
    <ActionCableConsumer
      channel={{channel: 'MessagesChannel', chat_id: chat.id}}
      onReceived={handleReceivedMessage}
    >
      <ChatWindowContainer
        messages={chat.messages}
        userId={userId}
      />
    </ActionCableConsumer>
    <NewMessageContainer chat={chat} />
  </div>
)

export default ChatDisplay
