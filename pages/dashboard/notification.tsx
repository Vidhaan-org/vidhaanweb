import { Tab } from "@headlessui/react"
import React from "react"

const Notification = () => {
  return (
    <div className="flex p-10 w-full h-full flex-col">
      <Tab.Group>
        <Tab.List>
          <TabButton buttonText="Upcomming Hearing" />
          <TabButton buttonText="Case updates" />
          <TabButton buttonText="Deadlines" />
        </Tab.List>
        <Tab.Panels className="h-full flex-1 flex-col justify-between">
          <Tab.Panel>
            <div className="flex py-4 flex-col gap-3">
              <div className="border-l-8 flex flex-col px-9 py-10 border-accent-blue w-full bg-gray-100">
                <div className="text-2xl items-center flex gap-2 text-accent-blue font-bold">
                  <span>Hari nivas vs University Grants Commission</span>
                  <span className="text-red-400">{"(CGHC01-043756-2019)"}</span>
                </div>
                <div className="text-lg text-gray-500 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  nesciunt aspernatur cumque, a sequi ratione.
                </div>
                <div className="text-lg text-accent-blue font-semibold">
                  {`(24 April, 1973)`}
                </div>
              </div>
              <div className="border-l-8 flex flex-col px-9 py-10 border-accent-blue w-full bg-gray-100">
                <div className="text-2xl items-center flex gap-2 text-accent-blue font-bold">
                  <span>Hari nivas vs University Grants Commission</span>
                  <span className="text-red-400">{"(CGHC01-043756-2019)"}</span>
                </div>
                <div className="text-lg text-gray-500 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  nesciunt aspernatur cumque, a sequi ratione.
                </div>
                <div className="text-lg text-accent-blue font-semibold">
                  {`(24 April, 1973)`}
                </div>
              </div>
              <div className="border-l-8 flex flex-col px-9 py-10 border-accent-blue w-full bg-gray-100">
                <div className="text-2xl items-center flex gap-2 text-accent-blue font-bold">
                  <span>Hari nivas vs University Grants Commission</span>
                  <span className="text-red-400">{"(CGHC01-043756-2019)"}</span>
                </div>
                <div className="text-lg text-gray-500 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  nesciunt aspernatur cumque, a sequi ratione.
                </div>
                <div className="text-lg text-accent-blue font-semibold">
                  {`(24 April, 1973)`}
                </div>
              </div>
              <div className="border-l-8 flex flex-col px-9 py-10 border-accent-blue w-full bg-gray-100">
                <div className="text-2xl items-center flex gap-2 text-accent-blue font-bold">
                  <span>Hari nivas vs University Grants Commission</span>
                  <span className="text-red-400">{"(CGHC01-043756-2019)"}</span>
                </div>
                <div className="text-lg text-gray-500 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  nesciunt aspernatur cumque, a sequi ratione.
                </div>
                <div className="text-lg text-accent-blue font-semibold">
                  {`(24 April, 1973)`}
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel></Tab.Panel>
          <Tab.Panel></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

const TabButton = ({ buttonText }: { buttonText: string }) => {
  return (
    <Tab
      className={({ selected }: { selected: Boolean }) => {
        const baseClass = "mr-3 pb-1 text-base font-semibold focus:outline-0 "
        return (
          baseClass +
          (selected
            ? "border-b-4 border-accent-blue text-black"
            : "text-gray-700")
        )
      }}
    >
      {buttonText}
    </Tab>
  )
}

export default Notification
