import React, { useEffect } from "react"
import * as d3 from "d3"
import geoJson from "./inidaJSON.json"

const IndiaHeatMap = () => {
  const drawMap = async () => {
    const colors = [
      "#ffffd9",
      "#edf8b1",
      "#c7e9b4",
      "#7fcdbb",
      "#41b6c4",
      "#1d91c0",
      "#225ea8",
      "#253494",
      "#081d58",
    ]
    const width = 700
    const height = 700

    const selection = d3
      .select("#indiaMap")
      .append("svg")
      .attr("class", "my-canvas")
      .attr("width", width)
      .attr("height", height)

    const json: any = await d3.json(
      "https://raw.githubusercontent.com/HindustanTimesLabs/shapefiles/master/india/state_ut/india_state.json"
    )
    const projection = d3.geoMercator().fitSize([width, height], json)
    var path = d3.geoPath().projection(projection)

    selection
      .selectAll("path")
      .data(json.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", colors[5])
      .on("click", (d, i) => {
        d3.select(this).attr("fill", colors[8])
      })
  }

  useEffect(() => {
    d3.selectAll("svg").remove()
    drawMap()
  }, [])

  return <div id="indiaMap"></div>
}

export default IndiaHeatMap
