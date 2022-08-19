import React, { useState } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { stateCityJson, useGetOptions } from "../../src/api/utils/utilService"
import Button from "../../src/components/Button"
import Loading from "../../src/components/Loading"
import PetitionMap from "../../src/components/PetitionMap"
import Select from "../../src/components/Select"
import { useForm } from "react-hook-form"
import Dynamic from "../../src/components/Dynamic"
import Dialog from "../../src/components/Dialog"

const FilePetition = () => {
  const optionQuery = useGetOptions()
  const { register, handleSubmit, reset } = useForm()
  const [isAlert, setAlert] = useState<boolean>(false)
  const [tab, setTab] = useState<
    "details" | "petitioner" | "respondent" | "act"
  >("details")

  const submit = (e: any) => {
    reset()
    setAlert(true)
  }

  if (optionQuery.isLoading) return <Loading />
  if (optionQuery.isSuccess)
    return (
      <Dynamic>
        <Dialog
          show={isAlert}
          onClose={() => {
            setAlert(false)
            setTab("details")
          }}
        >
          <div className="flex flex-col gap-6 items-center">
            <div className="">form submitted!!</div>
            <Button
              onClick={() => {
                setAlert(false)
                setTab("details")
              }}
              type="fill"
              color="accent-blue"
            >
              close
            </Button>
          </div>
        </Dialog>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col relative h-full min-w-full px-16 pt-8"
        >
          <PetitionMap stop={tab} />
          <div className="flex mt-16 h-full flex-col">
            {/* case details */}
            <div
              className={`${tab === "details" ? "flex" : "hidden"} flex-col`}
            >
              <div className="bg-gray-300 text-lg text-accent-blue px-6 py-2 rounded-md font-bold">
                Case Details
              </div>
              <div className="m-8 grid grid-cols-3 gap-8">
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Case Type
                  </div>
                  <Select options={optionQuery.data?.data["Case Type"]} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Case Category
                  </div>
                  <Select
                    {...register("")}
                    options={optionQuery.data?.data["Case Category"]}
                  />
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
                  <div className="text-gray-600 text-sm font-semibold">
                    Court
                  </div>
                  <Select options={optionQuery.data?.data.Court} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    State
                  </div>
                  <Select options={stateCityJson.states} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    District
                  </div>
                  <Select options={stateCityJson["Andhra Pradesh"]} />
                </div>
              </div>
            </div>
            {/* petitioner */}
            <div
              className={`${
                tab === "petitioner" ? "flex" : "hidden"
              } w-full h-full flex-col`}
            >
              <div className="flex border border-gray-300 overflow-hidden min-h-[70%] rounded-md flex-col">
                <div className="bg-gray-300 text-accent-blue font-bold text-lg px-6 py-2">
                  Petitioner
                </div>
                <textarea
                  cols={30}
                  rows={20}
                  className="focus:outline-none px-6 py-2"
                  placeholder="write petitioner details here ...."
                ></textarea>
              </div>
            </div>
            {/* respondent */}
            <div
              className={`${tab === "respondent" ? "flex" : "hidden"} flex-col`}
            >
              <div className="flex border border-gray-300 overflow-hidden min-h-[70%] rounded-md flex-col">
                <div className="bg-gray-300 text-accent-blue font-bold text-lg px-6 py-2">
                  Respondent
                </div>
                <textarea
                  cols={30}
                  rows={20}
                  className="focus:outline-none px-6 py-2"
                  placeholder="write respondent details here ...."
                ></textarea>
              </div>
            </div>
            {/* act */}
            <div className={`${tab === "act" ? "flex" : "hidden"} flex-col`}>
              <div className="flex border border-gray-300 overflow-hidden min-h-[70%] rounded-md flex-col">
                <div className="bg-gray-300 text-accent-blue font-bold text-lg px-6 py-2">
                  Act
                </div>
                <textarea
                  cols={30}
                  rows={20}
                  className="focus:outline-none px-6 py-2"
                  placeholder="write act details here ...."
                ></textarea>
              </div>
            </div>
          </div>
          <div className="absolute justify-between -translate-x-16 px-8 bottom-8 flex w-full">
            <Button
              type="fill"
              color="accent-orange"
              className={`shadow-lg mr-auto ${
                tab === "details" ? "hidden" : ""
              } shadow-gray-300`}
              onClick={() => {
                setTab((prev) => {
                  if (prev === "petitioner") return "details"
                  if (prev === "respondent") return "petitioner"
                  if (prev === "act") return "respondent"
                  return prev
                })
              }}
            >
              <div className="flex items-center my-1 mx-2 gap-2">
                <BsChevronLeft />
                <div className="">Back</div>
              </div>
            </Button>
            <Button
              type="fill"
              color="accent-orange"
              className={`shadow-lg ml-auto ${
                tab === "act" ? "hidden" : ""
              } shadow-gray-300`}
              onClick={() => {
                setTab((prev) => {
                  if (prev === "details") return "petitioner"
                  if (prev === "petitioner") return "respondent"
                  if (prev === "respondent") return "act"
                  return prev
                })
              }}
            >
              <div className="flex items-center my-1 mx-2 gap-2">
                <div className="">Next</div>
                <BsChevronRight />
              </div>
            </Button>
            <Button
              type="fill"
              color="accent-orange"
              submit
              className={`shadow-lg ml-auto ${
                tab !== "act" ? "hidden" : ""
              } shadow-gray-300`}
              onClick={() => {}}
            >
              <div className="flex items-center my-1 mx-2 gap-2">
                <div className="">Submit</div>
                {/* <BsChevronRight /> */}
              </div>
            </Button>
          </div>
        </form>
      </Dynamic>
    )

  return (
    <div className="flex w-full h-full items-center justify-center">
      Something went wrong
    </div>
  )
}

export default FilePetition
