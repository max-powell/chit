import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './components/Layout'
import LoginContainer from './containers/LoginContainer'
import DashboardContainer from './containers/DashboardContainer'

import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <Route
          exact path='/'
          render={routerProps => (
            <Layout>
              <DashboardContainer routerProps={routerProps} />
            </Layout>
          )}
        />
        <Route
          path='/login'
          render={routerProps => (
            <Layout>
              <LoginContainer routerProps={routerProps} />
            </Layout>
          )}
        />
      </Router>
    </div>
  )
}

export default App
