import React from "react"

import { ServiceProvider } from "./Service"
import { withComponentWrapper } from "./ComponentWrapper"
//const App1 = withComponentWrapper(React.lazy(() => import("app1/App1")))
const App1 = React.lazy(() => import("app1/AppService"))
import "./index.css"

export default function Shell() {
  return (
    <ServiceProvider>
      <div style={{ border: "1px solid green" }}>
        <h1>SHELL</h1>
        <div>Shell Content</div>
        <React.Suspense fallback={<div>loading</div>}>
          <App1 />
        </React.Suspense>
      </div>
    </ServiceProvider>
  )
}
