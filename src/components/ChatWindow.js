import React, { Component } from 'react'

import Message from './Message'

class ChatWindow extends Component {

  chatWindowRef = React.createRef()

  scrollToBottom = () => {
    const { current: chatWindow } = this.chatWindowRef
    chatWindow.scrollTo(0, chatWindow.scrollHeight)
  }

  componentDidMount () {
    const { current: chatWindow } = this.chatWindowRef
    this.scrollToBottom()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    this.scrollToBottom()
  }

  render() {
    const { messages, userId } = this.props
    const { chatWindowRef } = this

    return (
      <div id='chat-window' ref={chatWindowRef}>
        {
          messages.map(m => <Message key={m.id} message={m} userId={userId} />)
        }
      </div>
    )
  }

}

export default ChatWindow
