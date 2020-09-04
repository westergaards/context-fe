import React from "react"
import App1 from "./AppService"
const Shell = React.lazy(() => import("shell/Shell"))

import "./index.css"

function App() {
  return (
    <React.Suspense fallback={<LoadingShell />}>
      <div>
        <h1>App1 Page</h1>
      </div>

      <Shell />
    </React.Suspense>
  )
}

function LoadingShell() {
  return <div>LOADING SHELL</div>
}

export default App
