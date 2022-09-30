// import React, { useEffect } from "react"
// import * as d3 from "d3"
// import geoJson from "./inidaJSON.json"
// import { BaseType, ValueFn } from "d3"

// const IndiaHeatMap = ({ size }: { size?: number }) => {
//   const drawMap = async () => {
//     const colors = [
//       "#ffffd9",
//       "#edf8b1",
//       "#c7e9b4",
//       "#7fcdbb",
//       "#41b6c4",
//       "#1d91c0",
//       "#225ea8",
//       "#253494",
//       "#081d58",
//     ]
//     const width = size || 600
//     const height = size || 600

//     const selection = d3
//       .select("#indiaMap")
//       .append("svg")
//       .attr("class", "my-canvas")
//       .attr("width", width)
//       .attr("height", height)

//     const json: any = await d3.json(
//       "https://raw.githubusercontent.com/HindustanTimesLabs/shapefiles/master/india/state_ut/india_state.json"
//     )
//     const projection = d3.geoMercator().fitSize([width, height], json)
//     var path = d3.geoPath().projection(projection)

//     selection
//       .selectAll("path")
//       .data(json.features)
//       .enter()
//       .append("path")
//       .attr(
//         "d",
//         path as ValueFn<
//           SVGPathElement,
//           unknown,
//           string | number | boolean | readonly (string | number)[] | null
//         >
//       ) // @ts-ignore
//       .attr("class", "state")
//       .attr("stroke", "#fff")
//       .attr("fill", colors[5])
//       .on("click", (d, i) => {
//         d3.select(this! as BaseType).attr("fill", colors[8]) // @ts-ignore
//       })
//   }

//   useEffect(() => {
//     d3.select("#indiaMap").select("svg").remove()
//     drawMap()
//   }, [])

//   const colorize = () => {
//     // const random = Math.floor(Math.random() * months.length) // @ts-ignore
//     // console.log(random, [random])
//   }

//   return <div id="indiaMap"></div>
// }

// export default IndiaHeatMap

import React from "react"

const HeatMap = () => {
  return <div>HeatMap</div>
}

export default HeatMap
