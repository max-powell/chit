import React, { Component } from 'react'

import Message from './Message'

class ChatWindow extends Component {

  windowRef = React.createRef()

  componentDidUpdate () {
    const { current: window } = this.windowRef
    debugger;
    window.scrollTo(0, window.scrollHeight)
  }

  render() {
    const { messages, userId } = this.props
    const { windowRef } = this

    return (
      <div id='chat-window' ref={windowRef}>
        {
          messages.map(m => <Message key={m.id} message={m} userId={userId} />)
        }
      </div>
    )
  }

}

export default ChatWindow
