import React, { Component } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider'

import Message from './Message'
import UnreadMessagesAlert from './UnreadMessagesAlert'

class ChatWindow extends Component {

  chatWindowRef = React.createRef()

  state = {
    isMaxScrolled: false,
    unreadMessages: false
  }

  scrollToBottom = () => {
    const { current: chatWindow } = this.chatWindowRef
    chatWindow.scrollTo(0, chatWindow.scrollHeight)
  }

  handleScroll = ({target}) => {
    let isMaxScrolled = target.scrollHeight - target.scrollTop === target.clientHeight
    this.setState({isMaxScrolled})
    if (this.state.unreadMessages && isMaxScrolled) {
      this.setState({
        unreadMessages: false
      })
    }
  }

  componentDidMount () {
    const { current: chatWindow } = this.chatWindowRef
    this.scrollToBottom()
  }

  componentDidUpdate (prevProps) {
    if (this.state.isMaxScrolled) {
      this.scrollToBottom()
    } else {
      prevProps.messages.length < this.props.messages.length &&
      this.setState({unreadMessages: true})
    }
  }

  render() {
    const { messages, userId, chat, handleReceivedMessage } = this.props
    const { unreadMessages } = this.state
    const { chatWindowRef, handleScroll, scrollToBottom } = this

    return (
      <div id='chat-window' ref={chatWindowRef} onScroll={handleScroll}>
        <ActionCableConsumer
          channel={{channel: 'MessagesChannel', chat_id: chat.id}}
          onReceived={handleReceivedMessage}>
          {
            messages.map(m => <Message key={m.id} message={m} userId={userId} />)
          }
        </ActionCableConsumer>
        {
          unreadMessages &&
          <UnreadMessagesAlert handleClick={scrollToBottom} />
        }
      </div>
    )
  }

}

export default ChatWindow
