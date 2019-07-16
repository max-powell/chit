import React, { Component } from 'react'

import NewChat from '../components/NewChat'

class NewChatContainer extends Component {

  state = {
    title: '',
    selectedUserIds: [],
    users: []
  }

  componentDidMount () {
    const config = {
      headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
    }

    fetch('http://localhost:3000/api/v1/users', config)
      .then(res => res.json())
      .then(users => this.setState({users}))
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
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        chat: newChat
      })
    }

    fetch('http://localhost:3000/api/v1/chats/', config)
      .then(res => res.json())
      .then(chat => this.props.addChat(chat))
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
