import React from 'react'

import Checkbox from './Checkbox'

const NewChat = ({title, users, selectChat, handleInputChange, handleCheckboxChange, handleSubmit}) => (
  <div className='new-chat'>
    <h3 className='dashboard-item-title'>New chat:</h3>
    <form className='new-chat-form' onSubmit={handleSubmit}>
      <label htmlFor='title'>Title:</label>
      <input
      name='title'
      id='title'
      value={title}
      onChange={handleInputChange}
      />
      <label>Users:</label>
      <div className='scrollable'>
        {
          users.map(u => <Checkbox
            key={u.id}
            user={u}
            handleCheckboxChange={handleCheckboxChange}
            />
          )
        }
      </div>
      <button>Create chat</button>
    </form>
  </div>
)

export default NewChat;
