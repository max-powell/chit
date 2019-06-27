import React, { Component } from 'react'

import ChatList from '../components/ChatList'
import ChatDisplay from '../components/ChatDisplay'

class DashboardContainer extends Component {

  state = {
    chats: [],
    selectedChat: null
  }

  componentDidMount () {
    const config = {
      headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
    }
    fetch('http://localhost:3000/api/v1/chats', config)
      .then(res => res.json())
      .then(chats => this.setState({chats}))
  }

  selectChat = selectedChat => {this.setState({selectedChat})}

  render() {

    if (!localStorage.getItem('token')) {
      this.props.routerProps.history.push('/login')
    }

    const { chats, selectedChat } = this.state
    const { selectChat } = this

    return (
      selectedChat
      ? <ChatDisplay chat={selectedChat} />
      : <ChatList chats={chats} selectChat={selectChat} />
    )
  }

}

export default DashboardContainer
