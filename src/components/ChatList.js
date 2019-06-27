import React from 'react'

const ChatList = ({chats, selectChat}) => (
  <div id='dashboard'>
    <p>Your chats:</p>
    {
      chats.length > 0
      ? chats.map(c => <p key={c.id} onClick={selectChat}>{c.title}</p>)
      : <p>You have no chats</p>
    }
  </div>
)

export default ChatList
