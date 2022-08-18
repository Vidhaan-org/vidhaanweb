import React from "react"
import { BsChevronRight } from "react-icons/bs"
import { useGetOptions } from "../../src/api/utils/utils"
import Button from "../../src/components/Button"
import PetitionMap from "../../src/components/PetitionMap"
import Select from "../../src/components/Select"

const FilePetition = () => {
  const optionQuery = useGetOptions()
  return (
    <div className="flex flex-col relative min-w-full px-16 pt-8">
      <PetitionMap stop="petitioner" />
      <div className="felx flex-col mt-16">
        <div className="bg-gray-300 text-lg text-accent-blue px-6 py-2 rounded-md font-bold">
          Case Details
        </div>
        <div className="m-8 grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-1">
            <div className="text-gray-600 text-sm font-semibold">Case Type</div>
            <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-gray-600 text-sm font-semibold">
              Case Category
            </div>
            <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
          </div>
        </div>
        <div className="bg-gray-300 text-lg text-accent-blue px-6 py-2 rounded-md font-bold">
          Special Category
        </div>
        <div className="m-8 grid grid-cols-3 gap-8">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Senior Citizen</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">{"Woman/Child"}</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Leagl aid case</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">SC/ST</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Divyang</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">In custody</label>
          </div>
        </div>
        <div className="bg-gray-300 text-lg text-accent-blue px-6 py-2 rounded-md font-bold">
          Court and Location
        </div>
        <div className="m-8 grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-1">
            <div className="text-gray-600 text-sm font-semibold">Court</div>
            <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-gray-600 text-sm font-semibold">State</div>
            <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-gray-600 text-sm font-semibold">District</div>
            <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
          </div>
        </div>
      </div>
      <div className="fixed bottom-20 right-16">
        <Button
          type="fill"
          color="accent-orange"
          className="shadow-lg shadow-gray-300"
        >
          <div className="flex items-center my-1 mx-2 gap-2">
            <div className="">Next</div>
            <BsChevronRight />
          </div>
        </Button>
      </div>
    </div>
  )
}

export default FilePetition
