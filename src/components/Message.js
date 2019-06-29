import React from 'react'

const Message = ({message, userId}) => {

  let className = 'message'
  if (message.user.id === userId) {
    className += ' current-user'
  }

  return (
    <div className={className}>
      <p>{message.user.username}</p>
      <p>{message.text}</p>
      <p>{message.created_at}</p>
    </div>
  )
}

export default Message
