import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
    <Layout>
      <h1>Strona główna</h1>
      <ExampleButton>Zobacz więcej</ExampleButton>
    </Layout>
  )
}
