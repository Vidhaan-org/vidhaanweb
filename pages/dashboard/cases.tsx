import React from "react"
import { BsPin, BsPinAngleFill, BsSearch } from "react-icons/bs"
import Button from "../../src/components/Button"
import Select from "../../src/components/Select"

const Cases = () => {
  return (
    <div className="flex px-10 w-full h-full flex-col">
      <div className="flex mt-14 mx-4 mb-16 h-full flex-col">
        <div className="flex gap-4">
          <div className="flex bg-gray-200 rounded-md text-gray-500 items-center gap-3 px-3 py-2 text-lg border-gray-300 border-2">
            <BsSearch />
            <input
              type="text"
              name=""
              id=""
              placeholder="search"
              className="bg-transparent outline-none min-w-[30vw]"
            />
          </div>
          {/* <Button type="fill" color="accent-orange">
          <div className="items-center flex gap-2">
            <BsSearch />
            <div className="">Search</div>
          </div>
        </Button> */}
        </div>
        <div className="grid gap-7 grid-cols-2 mt-5">
          <div className="flex  gap-4 flex-col">
            <div className="text-xl font-semibold text-accent-blue">
              Filter By
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col gap-1">
                <div className="text-gray-600 text-sm font-semibold">
                  Case Status
                </div>
                <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-gray-600 text-sm font-semibold">Court</div>
                <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-gray-600 text-sm font-semibold">Year</div>
                <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <div className="text-xl font-semibold text-accent-blue">
              Sort By
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1">
                <div className="text-gray-600 text-sm font-semibold">Date</div>
                <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-gray-600 text-sm font-semibold">Name</div>
                <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-10 flex-col w-full bg-gray-100 rounded-md border border-gray-300">
          <div className="grid grid-cols-5 font-semibold p-2 bg-gray-300 text-accent-blue">
            <div className="uppercase">cnr</div>
            <div className="">Case Name</div>
            <div className="">Date</div>
            <div className="">Case Status</div>
          </div>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </div>
      </div>
    </div>
  )
}

const TableRow = () => {
  return (
    <div className="grid grid-cols-5 p-2 items-center hover:bg-gray-200">
      <div className="mr-5 line-clamp-1">CGHC01-043756-2019</div>
      <div className="mr-5 line-clamp-1">
        P.Suseela vs University Grants commission
      </div>
      <div className="mr-5 line-clamp-1">13 July 2019</div>
      <div className="flex">
        <div className="rounded-full cursor-default text-white font-semibold px-3 py-1 mr-auto bg-orange-300">
          Ongoing
        </div>
      </div>
      <div className="grid grid-cols-3 items-center gap-3">
        <Button
          type="fill"
          color="accent-blue"
          className="col-span-2 opacity-60"
        >
          <div className="w-full text-center">View Details</div>
        </Button>
        <BsPinAngleFill className="text-xl ml-auto mr-8 hover:text-red-400 text-gray-500" />
      </div>
    </div>
  )
}

export default Cases