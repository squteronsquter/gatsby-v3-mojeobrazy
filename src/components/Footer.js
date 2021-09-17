import React from "react"
import styled from "styled-components"

export default function Footer() {
  return (
    <>
      <Wrapper>
        <hr className="divider"></hr>
        <p className="text heading">
          &copy; 2021. All rights reserved{" "}
          <a className="link" href="https://dms.codes">
            DMS Codes
          </a>
        </p>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  padding: 4rem 0;
  color: black;

  .text {
    text-transform: uppercase;
  }
  .heading {
    font-size: 0.7rem;
    margin: 1rem 0;
  }
  .link {
    color: orange;
    text-decoration: none;
  }
  .divider {
    background-color: none;
    border: none;
    border-top: 1px solid #ccc;
    padding-bottom: 2rem;
    width: 100%;
  }
`
