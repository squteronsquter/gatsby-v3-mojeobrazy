import React from "react"
import "./layout.css"
import styled from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"

export const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Navbar />
        {children}
        <p className="text heading">
          Lorem ipsum dolor sit amet{" "}
          <a className="link" href="https://dms.codes">
            My Link
          </a>
        </p>
        <Footer />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  padding: 4rem;

  .text {
    text-transform: uppercase;
  }
  .heading {
    font-size: 0.8rem;
    margin: 1rem 0;
  }
  .link {
    color: orange;
    text-decoration: none;
  }
`

export default Layout
