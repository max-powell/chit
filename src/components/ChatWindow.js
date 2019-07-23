import React, { forwardRef } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider'

import Message from './Message'
import UnreadMessagesAlert from './UnreadMessagesAlert'

const ChatWindow = forwardRef((props, ref) => (
  <div id='chat-window' ref={ref} onScroll={props.handleScroll}>
    <ActionCableConsumer
      channel={{channel: 'MessagesChannel', chat_id: props.chat.id}}
      onReceived={props.handleReceivedMessage}>
      {
        props.messages.map(m => <Message key={m.id} message={m} userId={props.userId} />)
      }
    </ActionCableConsumer>
    {
      props.unreadMessages &&
      <UnreadMessagesAlert handleClick={props.scrollToBottom} />
    }
  </div>
))

export default ChatWindow
