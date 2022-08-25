import React from "react"
import ProgressSemiCircle from "../src/components/ProgressSemiCircle"

const Test = () => {
  return (
    <div className="flex w-full h-screen flex-col justify-center items-center">
      <div className="">
        <ProgressSemiCircle percent={10} />
      </div>
    </div>
  )
}

export default Test
