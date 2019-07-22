import React from 'react'

const YourChats = ({chats, selectChat}) => (
  <div className='chats'>
    <h3 className='dashboard-item-title'>Your chats:</h3>
    {
      chats.length > 0
      ? chats.map(c => <p key={c.id} onClick={() => selectChat(c)}>{c.title}</p>)
      : <p>You have no chats</p>
    }
</div>
)

export default YourChats
