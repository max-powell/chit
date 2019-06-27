import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './components/Layout'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          exact path='/'
          render={routerProps => (
            <Layout
              routerProps={routerProps}
              child={null}
            />
          )}
        />
        <Route
          path='/login'
          render={routerProps => (
            <Layout
              routerProps={routerProps}
              child={null}
            />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
