import React from "react"
import BarChart from "../src/components/graphs/BarChart"
import IndiaHeatMap from "../src/components/HeatMap"

const Test = () => {
  return (
    <div className="flex w-full h-screen flex-col justify-center items-center">
      <div className="">
        <IndiaHeatMap />
      </div>
    </div>
  )
}

export default Test
