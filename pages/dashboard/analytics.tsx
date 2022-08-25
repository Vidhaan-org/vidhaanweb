import React from "react"
import ProgressSemiCircle from "../../src/components/ProgressSemiCircle"

const Analytics = () => {
  return (
    <div className="flex flex-col gap-5 p-8 w-full">
      <div className="flex flex-col gap-5 h-[80vh]">
        <div className="min-w-full h-full grid gap-5 grid-cols-3">
          <div className="col-span-2 bg-white rounded-xl row-span-2 shadow-xl">
            <div className="flex flex-col">
              <h3 className="text-lg text-accent-blue font-bold p-4">
                Total Running Cases
              </h3>
            </div>
          </div>
          <div className="row-span-2 bg-white rounded-xl shadow-xl">
            <div className="flex flex-col">
              <h3 className="text-lg text-accent-blue font-bold p-4">
                Courts vs cases
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="shadow-xl h-[25vh] bg-white rounded-xl">
            <div className="flex flex-col">
              <h3 className="text-lg text-accent-blue font-bold p-4">
                Total cases vs complete cases
              </h3>
            </div>
          </div>
          <div className="shadow-xl h-[25vh] bg-white rounded-xl">
            <div className="flex flex-col h-full">
              <h3 className="text-lg text-accent-blue font-bold p-4">
                Total Running Cases
              </h3>
              <div className="flex h-full flex-col">
                <ProgressSemiCircle />
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
