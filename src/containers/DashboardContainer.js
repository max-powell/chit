import React, { Component } from 'react'

import ChatList from '../components/ChatList'
import ChatDisplay from '../components/ChatDisplay'

class DashboardContainer extends Component {

  state = {
    userId: 0,
    chats: [],
    selectedChat: null
  }

  componentDidMount () {
    const config = {
      headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
    }

    fetch('http://localhost:3000/api/v1/profile', config)
      .then(res => res.json())
      .then(({id: userId}) => this.setState({userId}))

    fetch('http://localhost:3000/api/v1/chats', config)
      .then(res => res.json())
      .then(chats => this.setState({chats}))
  }

  selectChat = selectedChat => {this.setState({selectedChat})}

  handleReceviedMessage = message => {
    const chats = [...this.state.chats]
    const chat = chats.find(c => c.id === message.chat_id)
    chat.messages.push(message)
    this.setState({chats})
  }

  render() {

    if (!localStorage.getItem('token')) {
      this.props.routerProps.history.push('/login')
    }

    const { userId, chats, selectedChat } = this.state
    const { selectChat, handleReceviedMessage } = this

    return (
      selectedChat
      ? <ChatDisplay
        chat={selectedChat}
        userId={userId}
        handleReceviedMessage={handleReceviedMessage}
      />
      : <ChatList
        chats={chats}
        selectChat={selectChat}
      />
    )
  }

}

export default DashboardContainer
