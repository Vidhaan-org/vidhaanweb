import React from "react"
import Button from "../Button"

const Updates = () => {
  return (
    <div className="flex flex-col h-full gap-3">
      <Update />
      <Update />
      <Update />
      <Update />
      <Update />
      <Update />
      <Update />
    </div>
  )
}

const Update = () => {
  return (
    <div className="border-l-8 flex flex-col px-9 py-10 border-accent-blue w-full bg-gray-100">
      <div className="text-2xl items-center flex gap-2 text-accent-blue font-bold">
        <span>Hari nivas vs University Grants Commission</span>
        <span className="text-red-400">{"(CGHC01-043756-2019)"}</span>
      </div>
      <div className="text-lg text-gray-500 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt
        aspernatur cumque, a sequi ratione.
      </div>
      <div className="flex gap-1">
        <div className="text-baase text-accent-blue font-semibold">
          Date of Notification:
        </div>
        <div className="">24 April, 1973</div>
      </div>
      <div className="flex gap-3 mt-2">
        <Button type="fill" color="accent-blue">
          <div className="flex justify-center">View Details</div>
        </Button>
        <Button type="fill" className="bg-red-400">
          <div className="flex justify-center">
            Send notification to person involved
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Updates