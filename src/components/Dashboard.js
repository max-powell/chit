import React from 'react'

import YourChats from './YourChats'
import NewChatContainer from '../containers/NewChatContainer'

const Dashboard = ({chats, selectChat, addChat}) => (
  <div id='dashboard'>
    <YourChats chats={chats} selectChat={selectChat} />
    <NewChatContainer addChat={addChat} />
  </div>
)

export default Dashboard
