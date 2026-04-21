import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Oversikt' },
  { to: '/alignment', label: 'Alignment-tabell' },
  { to: '/platforms', label: 'Plattformer' },
  { to: '/relationships', label: 'Relasjoner' },
  { to: '/research', label: 'Forskning' },
  { to: '/mutual-value', label: 'Gjensidig verdi' },
  { to: '/drive-intelligence', label: 'Drive-etterretning' },
  { to: '/next-steps', label: 'Neste steg' },
  { to: '/presentation', label: 'Presentasjon' },
  { to: '/rollebrief', label: 'NS Rollebrief' },
]

export function Nav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {open && <div className="nav-overlay" onClick={onClose} />}
      <nav className={`sidebar${open ? ' open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-logo">K</span>
          <div>
            <div className="sidebar-title">KAIROS</div>
            <div className="sidebar-subtitle">Alignment Hub</div>
          </div>
        </div>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={onClose}
                end={l.to === '/'}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="sidebar-footer">
          <span>Natural State</span>
          <span className="sidebar-footer-sub">Strategibyrå for stedsutvikling</span>
        </div>
      </nav>
    </>
  )
}
