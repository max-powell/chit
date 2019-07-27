import React, { Component } from 'react'

import { API_ROOT, HEADERS } from '../api/constants'

import NewChat from '../components/NewChat'

class NewChatContainer extends Component {

  state = {
    title: '',
    selectedUserIds: [],
    users: []
  }

  componentDidMount () {
    if (localStorage.getItem('token')) {
      fetch(`${API_ROOT}/users`, {headers: HEADERS()})
      .then(res => res.json())
      .then(users => this.setState({users}))
    }
  }

  handleInputChange = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }

  handleCheckboxChange = ({target}) => {
    if (target.checked) {
      this.setState({
        selectedUserIds: [...this.state.selectedUserIds, parseInt(target.value)]
      })
    } else {
      this.setState({
        selectedUserIds: this.state.selectedUserIds.filter(u => u != target.value)
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    const newChat = {
      title: this.state.title,
      user_ids: this.state.selectedUserIds
    }

    const config = {
      method: 'POST',
      headers: HEADERS(),
      body: JSON.stringify({
        chat: newChat
      })
    }

    fetch(`${API_ROOT}/chats`, config)
      .then(res => res.json())
      .then(chat => {
        chat.error
        ? alert(chat.error)
        : this.props.addChat(chat)
      })
  }

  render() {

    const { title, users } = this.state
    const { handleInputChange, handleCheckboxChange, handleSubmit } = this

    return (
      <NewChat
        title={title}
        users={users}
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
        handleSubmit={handleSubmit}
      />
    )
  }

}

export default NewChatContainer
