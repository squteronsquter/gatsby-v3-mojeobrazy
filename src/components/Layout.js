import React from "react"
import "./layout.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

export const Layout = ({ children }) => {
  return (
    <>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
