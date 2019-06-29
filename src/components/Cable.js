import React from 'react'
import { ActionCable } from 'react-actioncable-provider'

const Cable = ({chat, handleReceviedMessage}) => (
  <ActionCable
    key={chat.id}
    channel={{channel: 'MessagesChannel', chat_id: chat.id}}
    onReceived={handleReceviedMessage}
  />
)

export default Cable
