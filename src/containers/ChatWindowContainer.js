import React, { Component } from 'react'

import ChatWindow from '../components/ChatWindow'

class ChatWindowContainer extends Component {

  chatWindowRef = React.createRef()

  state = {
    isMaxScrolled: true,
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

    const { messages, userId } = this.props
    const { unreadMessages } = this.state
    const { chatWindowRef, scrollToBottom, handleScroll } = this

    return (
        <ChatWindow
          ref={chatWindowRef}
          handleScroll={handleScroll}
          messages={messages}
          userId={userId}
          unreadMessages={unreadMessages}
          scrollToBottom={scrollToBottom}
        />
    )
  }

}

export default ChatWindowContainer
