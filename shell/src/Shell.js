import React from "react"

import { ServiceProvider } from "./Service"

import Layout from "./Layout"
import "./index.css"

export default function Shell() {
  return (
    <ServiceProvider>
      <Layout />
    </ServiceProvider>
  )
}
