import { Tab } from "@headlessui/react"
import React from "react"
import Deadlines from "../../../src/components/notifications/Deadlines"
import Hearings from "../../../src/components/notifications/Hearings"
import Updates from "../../../src/components/notifications/Updates"

const Notification = () => {
  return (
    <div className="flex p-10 w-full h-full flex-col">
      <div className="flex flex-col h-full bg-gray-200 p-4 rounded-xl">
        <Tab.Group>
          <Tab.List className="flex gap-4">
            <TabButton buttonText="Upcomming Hearing" />
            <TabButton buttonText="Case updates" />
            <TabButton buttonText="Deadlines" />
          </Tab.List>
          <Tab.Panels className="h-full overflow-auto border-white rounded-b-xl border-4 bg-white mt-1 gray-scroll flex-1 flex-col p-3 justify-between">
            <Tab.Panel>
              <Hearings />
            </Tab.Panel>
            <Tab.Panel>
              <Updates />
            </Tab.Panel>
            <Tab.Panel>
              <Deadlines />
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
          "text-xl px-6 py-4 rounded-t-xl font-semibold text-accent-blue focus:outline-0 "
        return baseClass + (selected ? "bg-white" : "")
      }}
    >
      {buttonText}
    </Tab>
  )
}

export default Notification
