import React from 'react'

const Checkbox = ({user, handleCheckboxChange}) => (
  <div className='checkbox-option'>
    <input
      type='checkbox'
      id={user.username}
      value={user.id}
      onChange={handleCheckboxChange}
    />
    <label htmlFor={user.username}>{user.username}</label>
  </div>
)

export default Checkbox
