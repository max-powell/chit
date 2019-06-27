import React from 'react'
import { Form, Button } from 'semantic-ui-react';

const Login = ({handleInputChange, handleSubmit, username, password}) => (
  <div className='login'>
    <Form>
      <Form.Input
        label='username'
        width={6}
        name='username'
        value={username}
        onChange={handleInputChange}
      />
      <Form.Input
        label='password'
        width={6}
        type='password'
        name='password'
        value={password}
        onChange={handleInputChange}
      />
      <Button
        type='submit'
        name='login'
        content='Login'
        onClick={handleSubmit}
      />
      <Button
        type='submit'
        name='createUser'
        content='Create User'
        onClick={handleSubmit}
      />
    </Form>
  </div>
)

export default Login
