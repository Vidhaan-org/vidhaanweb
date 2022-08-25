import React from "react"
import style from "./PieChart.module.css"

const PieChart = ({ data }: { data: number[] }) => {
  return (
    <svg viewBox="0 0 64 64" className={style.pie}>
      {/* <circle r="25%" cx="50%" strokeDasharray="101" cy="50%" stroke="#333" /> */}
      {data?.map((_item, index) => {
        const num = data.reduce((prev, cur, curIndx) => {
          if (curIndx >= index) return prev
          else return cur + prev
        })
        return (
          <circle
            r="25%"
            cx="50%"
            strokeDasharray={`${num} 100`}
            cy="50%"
            stroke={`#${_item}${_item}${_item}`}
          />
        )
      })}
      {/* <circle
        r="25%"
        cx="50%"
        strokeDasharray="4 100"
        strokeDashoffset="2"
        stroke="red"
        cy="50%"
      /> */}
      {/* <circle
        r="25%"
        cx="50%"
        stroke="green"
        strokeDasharray="15 100"
        strokeDashoffset="6"
        cy="50%"
      /> */}
      {/* <circle
        r="25%"
        cx="50%"
        stroke="#181818"
        strokeDasharray="50 100"
        strokeDashoffset="0"
        cy="50%"
      /> */}
    </svg>
  )
}

export default PieChart
