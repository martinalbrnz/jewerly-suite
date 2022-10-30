import * as React from 'react'

import Navigator from './navigator'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <Navigator />
    <main>{ children }</main>
    </>
  )
}

export default Layout;