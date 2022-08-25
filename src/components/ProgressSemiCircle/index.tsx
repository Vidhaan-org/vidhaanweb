import React, { useRef } from "react"
import styles from "./ProgressSemiCircle.module.css"
import * as d3 from "d3"

const ProgressSemiCircle = () => {
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
          stroke="#801DF7"
          r="95"
        />
      </svg>
      <span className="font-bold  text-gray-900 text-lg ">40%</span>
    </div>
  )
}

export default ProgressSemiCircle
