import React, { Component } from 'react'

import { API_ROOT, HEADERS } from '../api/constants'

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
      headers: HEADERS(),
      body: JSON.stringify({
        ...this.state
      })
    }

    fetch(`${API_ROOT}/chats/${this.props.chat.id}/messages`, config)
      .then(() =>this.setState({text: ''}))
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
