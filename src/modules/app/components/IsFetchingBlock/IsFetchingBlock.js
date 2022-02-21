import React from "react"

const IsFetchingBlock = ({loadingBlock}) => {
  return (
    <div className="person">Loading... {loadingBlock}</div>
  )
}

export default IsFetchingBlock
