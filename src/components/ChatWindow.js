import React, { forwardRef } from 'react'

import Message from './Message'
import UnreadMessagesAlert from './UnreadMessagesAlert'

const ChatWindow = forwardRef((props, ref) => (
  <div id='chat-window' ref={ref} onScroll={props.handleScroll}>
    {
      props.messages.map(m => <Message key={m.id} message={m} userId={props.userId} />)
    }
    {
      props.unreadMessages &&
      <UnreadMessagesAlert handleClick={props.scrollToBottom} />
    }
  </div>
))

export default ChatWindow
