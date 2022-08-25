import {
  area,
  axisBottom,
  axisLeft,
  line,
  max,
  scaleBand,
  scaleLinear,
  select,
  selectAll,
  Selection,
} from "d3"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useWindowSize } from "../../hooks/windowSize"

const AreaChart = () => {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const divRef = useRef<HTMLDivElement | null>(null)
  const update = useRef(false)
  const [selection, setSelection] = useState<null | Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  >>(null)
  const [dimensions, setDimensions] = useState({
    width: divRef.current ? divRef.current.offsetWidth : 0,
    height: divRef.current ? divRef.current.offsetHeight : 0,
  })
  const [data, setData] = useState(initalData)

  const drawChart = () => {
    const margin = { top: 50, right: 30, bottom: 30, left: 60 }
    let x = scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, dimensions.width])
    // .padding(0.05)

    let y = scaleLinear()
      .domain([0, max(data, (d) => d.units + 30)!])
      .range([dimensions.height, 0])

    if (!selection) {
      setSelection(select(svgRef.current))
    } else {
      const xAxis = axisBottom(x)
      const yAxis = axisLeft(y)

      const lineArea = area<{ name: string; units: number }>()
        .x((d) => x(d.name)!)
        .y0(y(0))
        .y1((d) => y(d.units))

      selection
        .append("g")
        .attr(
          "transform",
          `translate(${12}, ${margin.bottom + dimensions.height})`
        )
        .call(xAxis)
        .attr("stroke-width", 2)

      selection
        .append("g")
        .attr(
          "transform",
          `translate(${margin.left - 1}, -${margin.bottom - 4})`
        )
        // .attr("transform", `translate(${0}, 0)`)
        .call(yAxis)
        .attr("stroke-width", 2)

      selection
        .append("g")
        .attr("transform", `translate(${margin.left}, -${margin.bottom})`)
        .append("path")
        .style("position", "relative")
        .datum(data)
        .attr("d", lineArea)
        .attr("fill", "#FF003233")

      selection
        .append("g")
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#FF8600")
        .attr("stroke-width", 4)
        .attr(
          "d",
          line<{ name: string; units: number }>()
            .x((d) => x(d.name)!)
            .y((d) => y(d.units))
        )
        .attr("transform", `translate(${margin.left}, -${margin.bottom})`)

      selection
        .append("g")
        .attr("transform", `translate(${margin.left}, -${margin.bottom})`)
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d) => x(d.name)!)
        .attr("cy", (d) => y(d.units))
        .attr("r", 7)
        .attr("fill", "#fff")
        .attr("stroke", "#FF8600")
        .attr("stroke-width", 3)
    }
  }

  useWindowSize(() => {
    if (divRef.current) {
      setDimensions({
        height: divRef.current?.offsetHeight,
        width: divRef.current?.offsetWidth,
      })
    }
    if (update.current) {
      selectAll("g").remove()
    } else update.current = true
  })

  useEffect(() => {
    setTimeout(() => {
      if (divRef.current)
        setDimensions({
          height: divRef.current.offsetHeight,
          width: divRef.current.offsetWidth,
        })
      console.log(divRef.current?.offsetWidth, divRef.current?.offsetHeight)
    }, 1000)
  }, [])

  useEffect(() => {
    if (update.current) {
      selectAll("g").remove()
    } else update.current = true
    drawChart()
  }, [dimensions])

  return (
    <div
      ref={divRef}
      className="h-full flex items-center justify-center w-full"
    >
      <svg ref={svgRef} height={dimensions.height} width={dimensions.width} />
    </div>
  )
}

export default AreaChart

const initalData = [
  {
    name: "foo",
    units: 32,
  },
  {
    name: "bar",
    units: 67,
  },
  {
    name: "baz",
    units: 81,
  },
  {
    name: "hoge",
    units: 38,
  },
  {
    name: "piyo",
    units: 28,
  },
  {
    name: "hogera",
    units: 59,
  },
]
