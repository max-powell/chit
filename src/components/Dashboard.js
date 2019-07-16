import React from 'react'

import YourChats from './YourChats'

const Dashboard = ({chats, selectChat}) => (
  <div id='dashboard'>
    <YourChats chats={chats} selectChat={selectChat} />
  </div>
)

export default Dashboard
