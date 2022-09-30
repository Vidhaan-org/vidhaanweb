import React, { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import Chart from "react-apexcharts"
import Dynamic from "../Dynamic"

const LineChart = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012],
    },
  })
  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ])

  return (
    <Dynamic>
      {typeof window !== "undefined" && (
        <Chart
          options={options}
          series={series}
          type="bar"
          width={500}
          height={320}
        />
      )}
    </Dynamic>
  )
}

export default LineChart
