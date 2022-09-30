import { useRouter } from "next/router"
import React from "react"
import { BsChevronDown } from "react-icons/bs"
import Button from "../../../src/components/Button"
import Dynamic from "../../../src/components/Dynamic"
import SelectOptions from "../../../src/components/SelectOptions"

const Index = () => {
  const router = useRouter()
  return (
    <Dynamic>
      <div className="h-auto min-h-full flex flex-col w-full px-10 pb-4 pt-10">
        <div className="bg-gray-200 rounded-md text-accent-blue font-semibold text-lg px-6 py-2">
          User Details
        </div>
        <div className="flex flex-col px-8 pt-4 gap-3 relative mt-4">
          <div className="flex w-[500px] justify-between items-center">
            <div className="font-semibold flex items-center">User Name</div>
            <input
              className="bg-white col-span-2 max-w-[500px] border-gray-300 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
              type={"text"}
            />
          </div>
          <div className="flex w-[500px] justify-between items-center">
            <div className="font-semibold flex items-center">Speciality</div>
            <div
              className={`relative max-w-[241px] w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
            >
              <select className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none">
                <SelectOptions data={["Advocate", "UGC Executive"]} />
              </select>
              <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                <BsChevronDown />
              </div>
            </div>
          </div>
          <div className="flex w-[500px] justify-between items-center">
            <div className="font-semibold flex items-center">Experience</div>
            <input
              className="bg-white col-span-2 max-w-[500px] border-gray-300 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
              type={"number"}
            />
          </div>
          <div className="flex w-[500px] justify-between items-center">
            <div className="font-semibold flex items-center">Age</div>
            <input
              className="bg-white col-span-2 max-w-[500px] border-gray-300 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
              type={"number"}
            />
          </div>
          <div className="flex w-[500px] justify-between items-center">
            <div className="font-semibold flex items-center">{"Fee (INR)"}</div>
            <input
              className="bg-white col-span-2 max-w-[500px] border-gray-300 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
              type={"number"}
            />
          </div>
          <div className="flex w-[500px] justify-between items-center">
            <div className="font-semibold flex items-center">
              {"Average Resolve Time (days)"}
            </div>
            <input
              className="bg-white col-span-2 max-w-[500px] border-gray-300 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
              type={"number"}
            />
          </div>
          <div className="flex w-[500px] justify-between items-center">
            <div className="font-semibold flex items-center">Active Cases</div>
            <input
              className="bg-white col-span-2 max-w-[500px] border-gray-300 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
              type={"number"}
            />
          </div>
          <Button
            type="fill"
            color="accent-blue"
            className="col-span-2 opacity-60"
          >
            <div className="w-full text-center px-6">Submit</div>
          </Button>
        </div>
      </div>
    </Dynamic>
  )
}

export default Index
