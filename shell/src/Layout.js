import React from "react"
import { useServiceContext } from "./Service"
import { withComponentWrapper } from "./ComponentWrapper"

const App1 = withComponentWrapper(React.lazy(() => import("app1/AppService")))

const Layout = () => {
  const context = useServiceContext()
  console.log("context s", context)

  const handleChange = (e) => {
    console.log("e", e.target.value)
    context.setService({ title: e.target.value })
  }

  return (
    <div style={{ border: "1px solid green" }}>
      <h1>SHELL - {context.title}</h1>
      <div>Shell Content </div>
      <React.Suspense fallback={<div>loading</div>}>
        <input type="input" onChange={handleChange}></input>
        <App1 />
      </React.Suspense>
    </div>
  )
}

export default Layout
