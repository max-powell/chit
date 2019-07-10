import React from 'react'

const UnreadMessagesAlert = ({handleClick}) => (
  <div className='unread-alert' onClick={handleClick}>
    <p>You have unread messages. Click here to view them V</p>
  </div>
)

export default UnreadMessagesAlert
