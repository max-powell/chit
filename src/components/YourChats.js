import React from 'react'

const YourChats = ({chats, selectChat}) => (
  <div>
    <h3>Your chats:</h3>
    {
      chats.length > 0
      ? chats.map(c => <p key={c.id} onClick={() => selectChat(c)}>{c.title}</p>)
      : <p>You have no chats</p>
    }
</div>
)

export default YourChats
