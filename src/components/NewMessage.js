import React from 'react'
import { Form, TextArea, Button } from 'semantic-ui-react'

const NewMessage = ({ text, handleInputChange, handleSubmit }) => (
  <div id='new-message-form'>
    <Form onSubmit={handleSubmit}>
      <TextArea
        value={text}
        onChange={handleInputChange}
      /><br/><br/>
      <Button
        type='submit'
        content='Send'
      />
    </Form>
  </div>
)

export default NewMessage
