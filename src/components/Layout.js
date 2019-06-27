import React, { Fragment } from 'react'

import Header from './Header';

const Layout = ({child}) => (
  <Fragment>
    <Header />
    <div id='content-pane'>{child}</div>
  </Fragment>
)

export default Layout
