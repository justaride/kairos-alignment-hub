import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from './Nav'

export function Layout() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="app-layout">
      <Nav open={navOpen} onClose={() => setNavOpen(false)} />
      <main className="main-content">
        <button
          className="menu-toggle"
          onClick={() => setNavOpen(true)}
          aria-label="Åpne meny"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
