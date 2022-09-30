import { Tab } from "@headlessui/react"
import React from "react"
import { BsChevronDown } from "react-icons/bs"
import SelectOptions from "../../../src/components/SelectOptions"

const ManageTasks = () => {
  return (
    <div className="h-auto min-h-full flex flex-col w-full px-10 pb-4 pt-10">
      <div className="bg-gray-200 rounded-md text-accent-blue font-semibold text-lg px-6 py-2">
        User Details
      </div>
      <div className="flex flex-col px-8 pt-4 gap-3 relative mt-4">
        <div className="flex w-[500px] justify-between items-center">
          <div className="font-semibold flex items-center">User Name</div>
          <div
            className={`relative max-w-[300px] w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
          >
            <select className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none">
              <SelectOptions data={["sdlfj", "sldfkj", "ldjlk"]} />
            </select>
            <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
              <BsChevronDown />
            </div>
          </div>
        </div>
        <div className="flex w-[500px] justify-between items-center">
          <div className="font-semibold flex items-center">User Type</div>
          <div
            className={`relative max-w-[300px] w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
          >
            <select className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none">
              <SelectOptions data={["sdlfj", "sldfkj", "ldjlk"]} />
            </select>
            <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
              <BsChevronDown />
            </div>
          </div>
        </div>
        <div className="flex w-[500px] justify-between items-center">
          <div className="font-semibold flex items-center">Petiition Type</div>
          <div
            className={`relative max-w-[300px] w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
          >
            <select className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none">
              <SelectOptions data={["sdlfj", "sldfkj", "ldjlk"]} />
            </select>
            <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
              <BsChevronDown />
            </div>
          </div>
        </div>
        <div className="flex w-[500px] justify-between items-center">
          <div className="font-semibold flex items-center">Expertise</div>
          <div
            className={`relative max-w-[300px] w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
          >
            <select className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none">
              <SelectOptions data={["sdlfj", "sldfkj", "ldjlk"]} />
            </select>
            <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
              <BsChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFEDEB] rounded-md mt-10 mb-8 font-semibold gap-6 flex flex-col text-accent-blue px-8 py-8">
        <div className="text-xl">Smart Recommendation</div>
        <div className="flex justify-around text-lg">
          <div className="">1. Priority Person</div>
          <div className="">2. Priority Person</div>
          <div className="">3. Priority Person</div>
        </div>
      </div>
      <div className="flex pb-10 px-8 flex-col">
        <Tab.Group>
          <div className="flex gap-8">
            <div className="font-semibold flex items-center">Field Type</div>

            <Tab.List className="flex gap-6">
              <TabButton buttonText="By Organization" />
              <TabButton buttonText="By Party" />
            </Tab.List>
          </div>
          <Tab.Panels>
            <Tab.Panel>
              <div className="flex gap-3 pt-6 flex-col">
                <div className="grid grid-cols-3 mr-auto">
                  <div className="font-semibold flex items-center">
                    Petition ID
                  </div>
                  <input
                    className="bg-white col-span-2 max-w-[500px] border-gray-300 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    type={"text"}
                  />
                </div>
                <div className="flex w-[500px] gap-6 justify-between items-start">
                  <div className="font-semibold flex items-start">
                    Description
                  </div>
                  <textarea
                    rows={5}
                    className="bg-white w-full col-span-2 max-w-[800px] border-gray-300 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                  />
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="flex gap-3 pt-6 flex-col">
                <div className="grid grid-cols-3 gap-5 mr-auto">
                  <div className="font-semibold flex items-center">
                    Respondent Name
                  </div>
                  <input
                    className="bg-white col-span-2 max-w-[500px] border-gray-300 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    type={"text"}
                  />
                </div>
                <div className="flex w-[500px] gap-20 justify-between items-start">
                  <div className="font-semibold flex items-start">
                    Description
                  </div>
                  <textarea
                    rows={5}
                    className="bg-white w-full col-span-2 max-w-[800px] border-gray-300 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                  />
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

const TabButton = ({ buttonText }: { buttonText: string }) => {
  return (
    <Tab
      className={({ selected }: { selected: Boolean }) => {
        const baseClass =
          "text-lg px-8 py-2 rounded-lg font-semibold focus:outline-0 "
        return (
          baseClass +
          (!selected ? "bg-none text-accent-blue" : "bg-[#6B7AAC] text-white")
        )
      }}
    >
      {buttonText}
    </Tab>
  )
}

export default ManageTasks
