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
            <Layout
              child={<DashboardContainer routerProps={routerProps} />}
            />
          )}
        />
        <Route
          path='/login'
          render={routerProps => (
            <Layout
              child={
                <LoginContainer routerProps={routerProps} />
              }
            />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
