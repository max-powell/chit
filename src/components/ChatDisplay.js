import React from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider'

import Cable from './Cable'
import ChatWindow from './ChatWindow'
import NewMessageContainer from '../containers/NewMessageContainer'

const ChatDisplay = ({chat, userId, handleReceivedMessage}) => (
  <div id='chat-display'>
    {/*<Cable chat={chat} handleReceivedMessage={handleReceivedMessage} />*/}
    <ActionCableConsumer
      channel={{channel: 'MessagesChannel', chat_id: chat.id}}
      onReceived={handleReceivedMessage}
    >
      <ChatWindow messages={chat.messages} userId={userId} />
    </ActionCableConsumer>
    <NewMessageContainer chat={chat} />
  </div>
)

export default ChatDisplay
