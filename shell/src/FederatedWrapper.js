import React, { Component } from "react"

export default class ErrorBoundary extends Component {
  state = {
    error: "",
    errorInfo: "",
    hasError: false,
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.log({ error, errorInfo })
    // this.setState({ errorInfo })
  }
  render() {
    // next code block goes here
    if (this.state.hasError) {
      return <div>Could not load</div>
    } else return <React.Suspense fallback={<div />}>{this.props.children}</React.Suspense>
  }
}
