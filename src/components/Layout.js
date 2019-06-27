import React, { Fragment } from 'react'

import Header from './Header';

const Layout = ({child}) => (
  <Fragment>
    <Header />
    {child}
  </Fragment>
)

export default Layout
