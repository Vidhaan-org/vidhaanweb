import React from "react"
import ColorTag from "../../../src/components/ColorTag"

const User = () => {
  return (
    <div className="h-auto min-h-full flex flex-col w-full px-10 pb-4 pt-14">
      <div className="bg-gray-200 rounded-md text-accent-blue font-semibold text-lg px-6 py-2">
        User Details
      </div>
      <div className="flex flex-col px-8 pt-4 gap-3 relative mt-4">
        <button className="bg-[#6B7AAC] right-0 center absolute text-white  rounded-md font-semibold px-4 py-2">
          Edit
        </button>
        <div className="grid grid-cols-3 mr-auto">
          <div className="font-semibold flex items-center">Name: </div>
          <div className="px-2 py-1 ">lsdk</div>
        </div>
        <div className="grid grid-cols-3 mr-auto">
          <div className="font-semibold flex items-center">Email: </div>
          <div className="px-2 py-1 ">lsdk</div>
        </div>
        <div className="grid grid-cols-3 mr-auto">
          <div className="font-semibold flex items-center">Type: </div>
          <div className="px-2 py-1 ">lsdk</div>
        </div>
        <div className="flex flex-col mt-2 gap-2">
          <div className="font-semibold flex items-center">Experties</div>
          <div className="bg-white gap-1 p-2 col-span-2 flex min-h-[120px] max-w-[500px] border-gray-300 focus:outline-accent-blue border-2 rounded-md">
            <ColorTag text="Role 1" color="yello" />
            <ColorTag text="Role 1" color="yello" />
            <ColorTag text="Role 1" color="yello" />
          </div>
        </div>
        <div className="flex flex-col mt-2 gap-2">
          <div className="font-semibold flex items-center">Experties</div>
          <div className="bg-white gap-1 p-2 col-span-2 flex min-h-[120px] max-w-[500px] border-gray-300 focus:outline-accent-blue border-2 rounded-md">
            <ColorTag text="Role 1" color="yello" />
            <ColorTag text="Role 1" color="yello" />
            <ColorTag text="Role 1" color="yello" />
          </div>
        </div>
        <div className="flex gap-2 mt-6"></div>
      </div>
    </div>
  )
}

export default User
