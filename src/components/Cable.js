import React from 'react'
import { ActionCable } from 'react-actioncable-provider'

const Cable = ({chat, handleReceivedMessage}) => (
  <ActionCable
    key={chat.id}
    channel={{channel: 'MessagesChannel', chat_id: chat.id}}
    onReceived={handleReceivedMessage}
  />
)

export default Cable
