const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })
import dynamic from "next/dynamic"
import React, { useState } from "react"
import Dynamic from "./Dynamic"

const SimpleArea = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  })
  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ])
  return (
    <Dynamic>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            {typeof window !== "undefined" && (
              <Chart options={options} series={series} type="bar" width="500" />
            )}
          </div>
        </div>
      </div>
    </Dynamic>
  )
}

export default SimpleArea
