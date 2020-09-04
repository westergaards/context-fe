import React from "react"
import FederatedWrapper from "./FederatedWrapper"

export function withComponentWrapper(WrappedComponent) {
  const FederatedComponent = (props) => {
    return (
      <FederatedWrapper>
        <WrappedComponent {...props} />
      </FederatedWrapper>
    )
  }

  return FederatedComponent
}
