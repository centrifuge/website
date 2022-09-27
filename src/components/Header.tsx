import * as React from 'react'
import { Link } from 'gatsby'

export function Header() {
  return (
    <header>
      <nav>
        <ul role="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/governance">Governance</Link>
          </li>
          <li>
            <Link to="/brand">Brand</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
