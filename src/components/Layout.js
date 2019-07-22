import React, { Fragment } from 'react'

import Header from './Header';

const Layout = ({children}) => (
  <Fragment>
    <Header />
    <div id='content-pane'>{children}</div>
  </Fragment>
)

export default Layout
