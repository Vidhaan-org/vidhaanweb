import React, { useEffect, useRef, useState } from "react"
import * as d3 from "d3"

const sample = [
  { category: "a", quantity: 40 },
  { category: "b", quantity: 20 },
  { category: "c", quantity: 89 },
  { category: "d", quantity: 124 },
  { category: "e", quantity: 80 },
  { category: "f", quantity: 20 },
]

export interface BarCoordinates {
  category: string
  quantity: number
}

const BarChart = () => {
  const d3Chart = useRef<SVGSVGElement | null>(null)
  // Ref for updating dimention
  const [dimensions, setDimensions] = useState({
    width: 100,
    height: 100,
  })
  // Ref for resize event update
  const update = useRef(false)

  useEffect(() => {
    // Listen for any resize event update
    if (typeof window !== "undefined")
      window.addEventListener("resize", () => {
        setDimensions({
          width: window.innerWidth - 50,
          height: window.innerHeight,
        })

        // If resize, remove the previous chart
        // if (update.current) {
        //   d3.selectAll("g").remove()
        // } else {
        //   update.current = true
        // }
        d3.selectAll("g").remove()
      })

    // Draw chart using the data and updated dimensions
    DrawChart(sample, dimensions)
  }, [dimensions])

  const margin = { top: 50, right: 30, bottom: 30, left: 60 }

  function DrawChart(
    data: BarCoordinates[],
    dimensions: { height: number; width: number }
  ) {
    // console.log(dimensions.width, dimensions.height)

    const chartwidth =
      parseInt(d3.select("#d3demo").style("width")) - margin.left - margin.right
    const chartheight =
      parseInt(d3.select("#d3demo").style("height")) -
      margin.top -
      margin.bottom

    const svg = d3
      .select(d3Chart.current)
      .attr("width", chartwidth + margin.left + margin.right)
      .attr("height", chartheight + margin.top + margin.bottom)

    // x scale
    const x = d3
      .scaleBand()
      .domain(`${d3.range(data.length)}`)
      .range([margin.left, chartwidth - margin.right])
      .padding(0.1)

    svg
      .append("g")
      .attr("transform", "translate(0," + chartheight + ")")
      .call(
        d3.axisBottom(x)
        //   .tickFormat((i: number) => data[i].category)
        //   .tickSizeOuter(0)
      )

    const max = d3.max(data, function (d) {
      return d.quantity
    })

    // y scale
    const y = d3
      .scaleLinear()
      .domain([0, max!])
      .range([chartheight, margin.top])

    svg
      .append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y).ticks(3).tickSize(20))

    // Draw bars
    svg
      .append("g")
      .attr("fill", "#ED7D31")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => x(`${i}`)!)
      .attr("y", (d) => y(d.quantity))
      .attr("height", (d) => y(0) - y(d.quantity))
      .attr("width", x.bandwidth())
  }

  return (
    <div id="d3demo" className="w-screen h-[50vh]">
      <svg ref={d3Chart}></svg>
    </div>
  )
}

export default BarChart
