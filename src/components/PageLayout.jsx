import React from 'react'
import AppHeader from './AppHeader.jsx'

function PageLayout({ children }) {
  return (
    <div className="site-shell">
      <AppHeader />
      <main>{children}</main>
    </div>
  )
}

export default PageLayout
