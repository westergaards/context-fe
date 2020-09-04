import React from "react"
import { useServiceContext } from "shell/Service"

export default function AppService() {
  const context = useServiceContext()

  const handleChange = (e) => {
    console.log("e", e.target.value)
    context.setService({ title: e.target.value })
  }

  return (
    <div style={{ border: "1px solid red" }}>
      <h1>APP1 - {context.title}</h1>
      <div>App1 Content</div>
      <input type="input" onChange={handleChange}></input>
    </div>
  )
}
