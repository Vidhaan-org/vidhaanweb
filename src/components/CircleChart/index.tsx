import React, { useRef } from "react"
import styles from "./CircleChart.module.css"

const CircleChart = ({ percent }: { percent: number[] }) => {
  const ref = useRef<SVGSVGElement | null>(null)

  // useEffect

  return (
    <div className={styles.progress}>
      <svg ref={ref} className={styles.svg}>
        <circle
          className={styles.circle}
          stroke="#dddddd"
          // cx={ref.current ? -ref.current.clientWidth / 2 : 2}
          // cy={ref.current ? -ref.current.clientHeight / 2 : 2}
          r="95"
        />
        <circle
          className={styles.circle}
          // cx={ref.current ? -ref.current.clientWidth / 2 : 2}
          // cy={ref.current ? -ref.current.clientHeight / 2 : 2}
          style={{
            strokeDashoffset: 100 * 6 - (100 * 6 * percent[0]) / 100,
          }}
          stroke="#801DF7"
          r="95"
        />
        <circle
          className={styles.circle}
          // cx={ref.current ? -ref.current.clientWidth / 2 : 2}
          // cy={ref.current ? -ref.current.clientHeight / 2 : 2}
          style={{
            strokeDashoffset: 100 * 6 - (100 * 6 * percent[1]) / 100,
          }}
          stroke="#FF0032"
          r="95"
        />
        <circle
          className={styles.circle}
          // cx={ref.current ? -ref.current.clientWidth / 2 : 2}
          // cy={ref.current ? -ref.current.clientHeight / 2 : 2}
          style={{
            strokeDashoffset: 100 * 6 - (100 * 6 * percent[2]) / 100,
          }}
          stroke="#FF8600"
          r="95"
        />
      </svg>
      <span className="font-bold  text-gray-900 text-lg opacity-0 pointer-events-none ">
        40%
      </span>
    </div>
  )
}
export default CircleChart
