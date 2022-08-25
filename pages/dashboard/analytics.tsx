import React, { useState } from "react"
import { BsCircleFill } from "react-icons/bs"
import CirleChart from "../../src/components/CircleChart"
import AreaChart, {
  AreaCoordinate,
} from "../../src/components/graphs/AreaChart"
import ProgressSemiCircle from "../../src/components/ProgressSemiCircle"
import SelectOptions from "../../src/components/SelectOptions"

const Analytics = () => {
  const [chartData, setChartData] = useState<AreaCoordinate[]>(initalData)
  return (
    <div className="flex flex-col gap-5 p-8 w-full">
      <div className="flex flex-col gap-5 h-[80vh]">
        <div className="min-w-full h-full grid gap-5 grid-cols-3">
          <div className="col-span-2 bg-white rounded-xl row-span-2 shadow-xl">
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center p-4">
                <h3 className="text-lg text-accent-blue font-bold">
                  Total Running Cases
                </h3>
                <div className="flex items-center gap-1 text-lg">
                  <BsCircleFill color="#FF8600" />
                  <select className="pr-1 mr-6 bg-transparent">
                    <SelectOptions
                      data={["jsdf", "sldfj", "lsdfjl", "lsdjf"]}
                    />
                  </select>
                  <BsCircleFill color="#801DF7" />
                  <select className="pr-1 bg-transparent">
                    <SelectOptions
                      data={["jsdf", "sldfj", "lsdfjl", "lsdjf"]}
                    />
                  </select>
                </div>
              </div>

              <div className="flex flex-col h-full">
                <AreaChart data={chartData} />
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
                  <div className="">Some Data</div>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <BsCircleFill color="#FF0032" />
                  <div className="">Some Data</div>
                </div>{" "}
                <div className="flex justify-center items-center gap-2">
                  <BsCircleFill color="#FF8600" />
                  <div className="">Some Data</div>
                </div>{" "}
                <div className="flex justify-center items-center gap-2">
                  <BsCircleFill color="#dddddd" />
                  <div className="">Some Data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="shadow-xl h-[25vh] bg-white rounded-xl">
            <div className="flex h-full flex-col">
              <h3 className="text-lg text-accent-blue font-bold p-4">
                Total cases vs complete cases
              </h3>
              <div className="flex flex-col h-full">
                {/* <CanvasJSReact.CanvasJSChart options={options} /> */}
              </div>
            </div>
          </div>
          <div className="shadow-xl h-[25vh] bg-white rounded-xl">
            <div className="flex flex-col h-full">
              <h3 className="text-lg text-accent-blue font-bold p-4">
                Total Running Cases
              </h3>
              <div className="flex h-full pt-6 items-center justify-center flex-col">
                <div className="translate-x-5 mt-8 relative">
                  <ProgressSemiCircle percent={10} />
                  <div className="absolute bottom-5 -translate-x-3 font-bold text-gray-800 text-xl">
                    10%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl h-[25vh] bg-white rounded-xl">
            <div className="flex flex-col h-full">
              <h3 className="text-lg text-accent-blue font-bold p-4">
                Total Running Cases
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 h-[70vh]">
        <div className="shadow-xl bg-white rounded-xl"></div>
        {/* <div className="shadow-xl bg-white row-span-2 rounded-xl"></div> */}
        <div className="shadow-xl bg-white rounded-xl"></div>
      </div>
    </div>
  )
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
