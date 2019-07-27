import React, { Component } from 'react'

import { API_ROOT, HEADERS } from '../api/constants'

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

    let route = API_ROOT
    e.target.name === 'login'
    ? route += '/login'
    : route += '/users'

    const config = {
      method: 'POST',
      headers: HEADERS(),
      body: JSON.stringify({user: this.state})
    }

    fetch(route, config)
      .then(res => res.json())
      .then(json => {
        if (json.jwt) {
          localStorage.setItem('token', json.jwt)
          this.props.routerProps.history.push('/')
        } else {
          alert(json.error)
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
