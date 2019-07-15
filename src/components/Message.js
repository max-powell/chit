import React from 'react'

const moment = require('moment')

const Message = ({message, userId}) => {

  let className = 'message'
  if (message.user.id === userId) {
    className += ' current-user'
  }

  const createdAt = moment(message.created_at).format('h:mma, DD/MM/YY')

  return (
    <div className={className}>
      <p>{message.user.username}</p>
      <p>{message.text}</p>
      <p>{createdAt}</p>
    </div>
  )
}

export default Message
