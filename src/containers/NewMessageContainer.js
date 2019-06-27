import React, { Component } from 'react'

import NewMessage from '../components/NewMessage'

class NewMessageContainer extends Component {

  state = {
    text: ''
  }

  handleInputChange = ({target: {value: text}}) => {this.setState({text})}

  handleSubmit = event => {
    event.preventDefault()

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        ...this.state
      })
    }

    fetch(`http://localhost:3000/api/v1/chats/${this.props.chat.id}/messages`, config)
  }

  render() {

    const { handleInputChange, handleSubmit } = this
    const { text } = this.state

    return (
      <NewMessage
        text={text}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    )
  }

}

export default NewMessageContainer
