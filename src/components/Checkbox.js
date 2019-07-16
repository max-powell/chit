import React, {Fragment} from 'react'

const Checkbox = ({user, handleCheckboxChange}) => (
  <Fragment>
    <input
      type='checkbox'
      id={user.username}
      value={user.id}
      onChange={handleCheckboxChange}
    />
    <label htmlFor={user.username}>{user.username}</label>
  </Fragment>
)

export default Checkbox
