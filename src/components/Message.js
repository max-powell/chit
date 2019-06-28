import React from 'react'

const Message = ({message}) => {

  let className = 'message'
  if (message['current_user?']) {
    className += ' current-user'
  }

  debugger;

  return (
    <div className={className}>
      <p>{message.user.username}</p>
      <p>{message.text}</p>
      <p>{message.created_at}</p>
    </div>
  )
}

export default Message
