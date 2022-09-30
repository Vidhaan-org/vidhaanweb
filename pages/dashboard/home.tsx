import { useRouter } from "next/router"
import React from "react"
import { BsBellFill, BsGearFill, BsInfoCircle } from "react-icons/bs"
import Button from "../../src/components/Button"
import Dynamic from "../../src/components/Dynamic"
import LineChart from "../../src/components/graphs/LineChart"
import SimpleMap from "../../src/components/SimpleMap"

const Home = () => {
  const router = useRouter()
  return (
    <Dynamic>
      <div className="flex h-full flex-col w-full px-8">
        <div className="flex w-full gap-6 mt-8">
          <div className="flex w-full items-center bg-gray-100 rounded shadow-md overflow-hidden">
            <div className="px-4 text-white gap-3 flex font-semibold py-3 items-center bg-accent-orange">
              <BsInfoCircle />
              <div className="whitespace-nowrap">Urgent action Required</div>
            </div>
            <div className="flex gap-3 px-4 w-full">
              <div className="rounded-full text-white font-semibold px-3 py-1 bg-orange-300">
                12 June 2022
              </div>
              <div className="rounded-full text-white font-semibold px-3 py-1 bg-blue-300">
                12 June 2022
              </div>
              <div className="flex items-center ml-4 font-semibold text-gray-800">
                Mayank Sharma vs University Grants commission
                {" (upcomming hearing)"}
              </div>
            </div>
          </div>
          <Button type="fill" color="accent-orange">
            <div className="px-6">Go</div>
          </Button>
        </div>
        <div className="grid text-2xl gap-5 py-6 grid-cols-3">
          <Button
            type="fill"
            width="auto"
            className="justify-center py-9 opacity-60"
            color="accent-blue"
          >
            <div className="py-6">Our Cases</div>
          </Button>
          <Button
            type="fill"
            width="auto"
            className="justify-center py-9 opacity-60"
            color="accent-blue"
          >
            <div className="py-6">FilePetition</div>
          </Button>
          <Button
            type="fill"
            width="auto"
            className="justify-center py-9 opacity-60"
            color="accent-blue"
          >
            <div className="py-6">Hearing Schedule</div>
          </Button>
        </div>
        <div className="w-full mb-8 h-full pb-8 grid gap-5 grid-cols-4">
          <div className="col-span-2 relative flex flex-col items-center justify-center bg-white shadow-2xl shadow-[#0005] z-10 rounded-xl">
            {/* <LineChart /> */}
            {/* <div
            onClick={() => router.push("/dashboard/home")}
            className="absolute scale-[.38] translate-x-3"
          >
            <CanvasJSReact.CanvasJSChart options={options} />
            <BarChart />
          </div> */}
            {typeof window !== "undefined" && <LineChart />}
          </div>
          <div className="col-span-2 relative flex flex-col justify-center items-center p-6 row-span-2 shadow-2xl bg-white z-10 rounded-xl">
            <h3 className="font-bold text-accent-blue absolute top-4 left-4 text-lg">
              UGC Cases In India
            </h3>
            {/* <IndiaHeatMap size={600} /> */}
            <SimpleMap />
          </div>
          <Button
            type="fill"
            width="auto"
            className="justify-center z-10 opacity-60"
            color="accent-blue"
          >
            <div className="flex flex-col items-center gap-4 text-xl">
              <BsGearFill size={60} />
              <div className="">Settings</div>
            </div>
          </Button>
          <Button
            type="fill"
            width="auto"
            className="justify-center z-10 opacity-60"
            color="accent-blue"
          >
            <div className="flex flex-col items-center my-6 gap-4 text-xl">
              <BsBellFill size={60} />
              <div className="">Notifications &amp; Deadlines</div>
            </div>
          </Button>
        </div>
      </div>
    </Dynamic>
  )
}

export default Home
