import React, { Component, Fragment } from 'react'

import Dashboard from '../components/Dashboard'
import ChatDisplay from '../components/ChatDisplay'
import LogoutButton from '../components/LogoutButton'

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

  handleReceivedMessage = message => {
    const chats = [...this.state.chats]
    const chat = chats.find(c => c.id === message.chat_id)
    const updatedChat = {
      ...chat,
      messages: [...chat.messages, message]
    }

    this.setState({
      chats: [...this.state.chats.filter(c => c.id !== chat.id), updatedChat],
      selectedChat: updatedChat
    })
  }

  addChat = chat => {
    this.setState({
      chats: [...this.state.chats, chat],
    })
    this.selectChat(chat)
  }

  pushToLogin = () => {
    this.props.routerProps.history.push('/login')
  }

  logout = () => {
    localStorage.removeItem('token')
    this.pushToLogin()
  }

  render() {

    const { userId, chats, selectedChat } = this.state
    const { selectChat, handleReceivedMessage, addChat, pushToLogin, logout } = this

    if (!localStorage.getItem('token')) {
      pushToLogin()
    }

    return (
      <Fragment>
        {selectedChat
        ? <ChatDisplay
        chat={selectedChat}
        userId={userId}
        selectChat={selectChat}
        handleReceivedMessage={handleReceivedMessage}
        />
        : <Dashboard
        chats={chats}
        selectChat={selectChat}
        addChat={addChat}
        />}
        <LogoutButton logout={logout} />
      </Fragment>
    )
  }

}

export default DashboardContainer
