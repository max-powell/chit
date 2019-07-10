import React, { Component } from 'react'

import Message from './Message'

class ChatWindow extends Component {

  chatWindowRef = React.createRef()

  state = {
    isMaxScrolled: false
  }

  scrollToBottom = () => {
    const { current: chatWindow } = this.chatWindowRef
    chatWindow.scrollTo(0, chatWindow.scrollHeight)
  }

  handleScroll = ({target}) => {
    let isMaxScrolled = target.scrollHeight - target.scrollTop === target.clientHeight
    this.setState({isMaxScrolled})
  }

  componentDidMount () {
    const { current: chatWindow } = this.chatWindowRef
    this.scrollToBottom()
  }

  componentDidUpdate () {
    this.state.isMaxScrolled && this.scrollToBottom()
  }

  render() {
    const { messages, userId } = this.props
    const { chatWindowRef, handleScroll } = this

    return (
      <div id='chat-window' ref={chatWindowRef} onScroll={handleScroll}>
        {
          messages.map(m => <Message key={m.id} message={m} userId={userId} />)
        }
      </div>
    )
  }

}

export default ChatWindow
