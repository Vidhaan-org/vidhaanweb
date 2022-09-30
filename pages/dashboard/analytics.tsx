import React, { useState } from "react"
import { BsCircleFill } from "react-icons/bs"
import { stateCityJson } from "../../src/api/utils/utilService"
import CirleChart from "../../src/components/CircleChart"
import AreaChart, {
  AreaCoordinate,
} from "../../src/components/graphs/AreaChart"
import BarChart from "../../src/components/graphs/BarChart"
import LineChart from "../../src/components/graphs/LineChart"
import IndiaHeatMap from "../../src/components/HeatMap"
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })
import SimpleMap from "../../src/components/SimpleMap"
import Dynamic from "../../src/components/Dynamic"
import dynamic from "next/dynamic"

const Analytics = () => {
  const [chartData, setChartData] = useState<AreaCoordinate[]>(initalData)
  const [ordinates, setOrd] = useState<{ absissa: string; ordinate: string }>({
    absissa: "court",
    ordinate: "year",
  })
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

  // function shuffle() {
  //   setSeries((array) => {
  //     const data = array[0].data.sort(() => Math.random() - 0.5)
  //     console.log(data)
  //     return []
  //   })
  // }
  if (typeof window !== "undefined")
    return (
      <Dynamic>
        {typeof window !== "undefined" && (
          <div className="flex flex-col gap-5 p-8 w-full">
            <div className="flex flex-col gap-5 min-h-[80vh]">
              <div className="min-w-full h-full grid gap-5 grid-cols-3">
                <div className="col-span-2 bg-white rounded-xl row-span-2 shadow-xl">
                  <div className="flex h-full flex-col">
                    <div className="flex justify-between items-center p-4">
                      <h3 className="text-lg text-accent-blue font-bold">
                        Total Running Cases
                      </h3>
                    </div>

                    <div className="flex flex-col h-full">
                      {/* <AreaChart data={chartData} /> */}
                      {/* <LineChart /> */}
                      {typeof window !== "undefined" && (
                        <Chart
                          options={options}
                          series={series}
                          type="area"
                          // width={500}
                          // height={320}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="row-span-2 bg-white rounded-xl shadow-xl">
                  <div className="flex h-full flex-col">
                    <h3 className="text-lg text-accent-blue font-bold p-4">
                      Courts vs cases
                    </h3>
                    <div className="flex relative items-center justify-center flex-col h-full">
                      <div className="translate-x-4 -translate-y-2">
                        <CirleChart percent={[80, 60, 45]} />
                      </div>
                      <div className="text-center -translate-y-5 text-gray-900 -translate-x-1 font-bold text-xl absolute">
                        41,089
                        <br />
                        <span className="text-[#420988]">cases</span>
                      </div>
                    </div>
                    <div className="grid gap-2 mb-6 grid-cols-2">
                      <div className="flex justify-center items-center gap-2">
                        <BsCircleFill color="#801DF7" />
                        <div className="">Lower Court</div>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <BsCircleFill color="#FF0032" />
                        <div className="">District Court</div>
                      </div>{" "}
                      <div className="flex justify-center items-center gap-2">
                        <BsCircleFill color="#FF8600" />
                        <div className="">High Court</div>
                      </div>{" "}
                      <div className="flex justify-center items-center gap-2">
                        <BsCircleFill color="#dddddd" />
                        <div className="">Supreme Court</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5">
                <div className="shadow-xl min-h-[25vh] bg-white rounded-xl">
                  <div className="flex h-full flex-col">
                    <h3 className="text-lg text-accent-blue font-bold p-4">
                      Total cases vs complete cases
                    </h3>
                    <div className="flex flex-col h-full">
                      {typeof window !== "undefined" && (
                        <Chart
                          options={options}
                          series={series}
                          type="histogram"
                          // width={500}
                          // height={320}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="shadow-xl min-h-[25vh] bg-white rounded-xl">
                  <div className="flex flex-col h-full">
                    <h3 className="text-lg text-accent-blue font-bold p-4">
                      Total Running Cases
                    </h3>
                    <div className="flex flex-col h-full">
                      {typeof window !== "undefined" && (
                        <Chart
                          options={options}
                          series={series}
                          type="line"
                          // width={500}
                          // height={320}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="shadow-xl min-h-[25vh] bg-white rounded-xl">
                  <div className="flex flex-col h-full">
                    <h3 className="text-lg text-accent-blue font-bold p-4">
                      Total Running Cases
                    </h3>
                    <div className="flex flex-col h-full">
                      {typeof window !== "undefined" && (
                        <Chart
                          options={options}
                          series={series}
                          type="radar"
                          // width={500}
                          // height={320}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mb-20 gap-5 h-[70vh]">
              <div className="shadow-xl flex flex-col justify-center items-center p-4 bg-white rounded-xl">
                {typeof window !== "undefined" && <LineChart />}
              </div>
              {/* <div className="shadow-xl bg-white row-span-2 rounded-xl"></div> */}
              <div className="shadow-xl flex flex-col justify-center relative items-center p-4 bg-white rounded-xl">
                <h3 className="font-bold text-accent-blue absolute top-4 left-4 text-lg">
                  UGC Cases In India
                </h3>
                <SimpleMap />
              </div>
            </div>
          </div>
        )}
      </Dynamic>
    )
  return <></>
}

export default Analytics

const initalData = [
  {
    absicssa: "foo",
    ordinate: 32,
  },
  {
    absicssa: "bar",
    ordinate: 67,
  },
  {
    absicssa: "baz",
    ordinate: 81,
  },
  {
    absicssa: "hoge",
    ordinate: 38,
  },
  {
    absicssa: "piyo",
    ordinate: 28,
  },
  {
    absicssa: "hogera",
    ordinate: 59,
  },
  {
    absicssa: "baslkdfjz",
    ordinate: 81,
  },
  {
    absicssa: "hoglskdfe",
    ordinate: 38,
  },
  {
    absicssa: "psdflkl",
    ordinate: 28,
  },
  {
    absicssa: "hogerkldfja",
    ordinate: 59,
  },
]

const courtArr = [12, 32, 43, 23, 43, 23, 34, 34, 34]
const stateArr = stateCityJson.states
const yearArr = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012]
