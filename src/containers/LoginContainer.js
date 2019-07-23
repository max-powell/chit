import React, { Component } from 'react'

import Login from '../components/Login'

class LoginContainer extends Component {

  state = {
    username: '',
    password: ''
  }

  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    let route = 'https://chit-api.herokuapp.com/api/v1/'
    e.target.name === 'login'
    ? route += 'login'
    : route += 'users'

    const config = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: this.state})
    }

    fetch(route, config)
      .then(res => res.json())
      .then(json => {
        if (!!json.jwt) {
          localStorage.setItem('token', json.jwt)
          this.props.routerProps.history.push('/')
        } else {
          alert(json.message)
          this.setState({
            username: '',
            password: ''
          })
        }
      })
  }

  render() {

    if (!!localStorage.getItem('token')) {
      this.props.routerProps.history.push('/')
    }

    const { handleInputChange, handleSubmit } = this
    const { username, password } = this.state

    return (
      <Login
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        username={username}
        password={password}
      />
    )
  }

}

export default LoginContainer
