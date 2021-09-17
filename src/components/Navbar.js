import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/about">O nas</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li>
            <Link to="/paintings/">Obrazy</Link>
          </li>
          <li>
            <Link to="/paintings/history">Historia</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
