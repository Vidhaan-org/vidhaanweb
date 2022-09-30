import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { BsChevronDown, BsPin, BsPinAngleFill, BsSearch } from "react-icons/bs"
import { Case } from "../../../src/api/cases/Case"
import { useGetCasesAll } from "../../../src/api/cases/caseService"
import { useGetOptions } from "../../../src/api/utils/utilService"
import Button from "../../../src/components/Button"
import Loading from "../../../src/components/Loading"
import Select from "../../../src/components/Select"
import SelectOptions from "../../../src/components/SelectOptions"

const Cases = () => {
  const { data: cases, isLoading, isSuccess } = useGetCasesAll()
  const { data: options } = useGetOptions()

  if (isLoading) return <Loading />
  if (isSuccess)
    return (
      <div className="flex px-10 w-full h-auto flex-col">
        <div className="flex mt-14 mx-4 mb-16 h-auto flex-col">
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
                  <div
                    className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                  >
                    <select
                      // {...register("petitioner.petitioner_type")}
                      className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                    >
                      <SelectOptions data={options?.data["Case Status"]} />
                    </select>
                    <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                      <BsChevronDown />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Court
                  </div>
                  <div
                    className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                  >
                    <select
                      // {...register("petitioner.petitioner_type")}
                      className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                    >
                      <SelectOptions data={options?.data.Court} />
                    </select>
                    <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                      <BsChevronDown />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Year
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    // {...register("petitioner.petitioner_age")}
                    type={"number"}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <div className="text-xl font-semibold text-accent-blue">
                Sort By
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Date
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    // {...register("petitioner.petitioner_age")}
                    type={"date"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Name
                  </div>
                  <div
                    className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                  >
                    <select
                      // {...register("petitioner.petitioner_type")}
                      className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                    >
                      <SelectOptions data={["Ascending", "Descending"]} />
                    </select>
                    <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                      <BsChevronDown />
                    </div>
                  </div>
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
            {cases?.map((item) => (
              <TableRow key={item.id} caseData={item} />
            ))}
          </div>
        </div>
      </div>
    )
  return (
    <div className="flex w-full h-full items-center justify-center">
      Something went wrong
    </div>
  )
}

const TableRow = ({ caseData }: { caseData: Case }) => {
  const router = useRouter()
  return (
    <div className="grid grid-cols-5 p-2 items-center hover:bg-gray-200">
      <div className="mr-5 line-clamp-1">{caseData.cnr_number}</div>
      <div className="mr-5 line-clamp-1">
        {caseData.petitioner[0]?.petitioner_name +
          " vs University Grants Commission"}
      </div>
      <div className="mr-5 line-clamp-1">
        {new Date(caseData.ia[0]?.filing_date).toDateString()}
      </div>
      <div className="flex">
        <div
          className={`rounded-full cursor-default text-white font-semibold px-3 py-1 mr-auto ${
            caseData.case_status === "Pending" ? "bg-[#ffc814]" : "bg-green-400"
          }`}
        >
          {caseData.case_status}
        </div>
      </div>
      <div className="grid grid-cols-3 items-center gap-3">
        <Link href={`/dashboard/cases/${caseData.id}`}>
          <Button
            type="fill"
            color="accent-blue"
            className="col-span-2 opacity-60"
          >
            <div className="w-full text-center">View Details</div>
          </Button>
        </Link>
        <BsPinAngleFill className="text-xl ml-auto mr-8 hover:text-red-400 text-gray-500" />
      </div>
    </div>
  )
}

export default Cases
