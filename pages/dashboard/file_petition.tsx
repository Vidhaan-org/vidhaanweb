import React, { useState } from "react"
import { BsChevronDown, BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { stateCityJson, useGetOptions } from "../../src/api/utils/utilService"
import Button from "../../src/components/Button"
import Loading from "../../src/components/Loading"
import PetitionMap from "../../src/components/PetitionMap"
import Select from "../../src/components/Select"
import { useForm } from "react-hook-form"
import Dynamic from "../../src/components/Dynamic"
import Dialog from "../../src/components/Dialog"
import { PetitionFormFields } from "../../src/Types/form"
import { useFilePetition } from "../../src/api/petition/petitionService"
import { sendJsonData } from "../../src/api/apiService"

const FilePetition = () => {
  const optionQuery = useGetOptions()
  const { mutate: submitPetition } = useFilePetition()
  const { register, handleSubmit, reset } = useForm<PetitionFormFields>({
    defaultValues: {},
  })
  const [tab, setTab] = useState<
    "details" | "petitioner" | "respondent" | "act"
  >("details")

  const submit = (e: any) => {
    console.log(e)
    submitPetition(e)
    // reset()
  }

  if (optionQuery.isLoading) return <Loading />
  if (optionQuery.isSuccess)
    return (
      <Dynamic>
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
                  <div
                    className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                  >
                    <select
                      className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                      {...register("case_type")}
                    >
                      <SelectOptions
                        data={optionQuery.data?.data["Case Type"]}
                      />
                    </select>
                    <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                      <BsChevronDown />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Case Category
                  </div>
                  <div
                    className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                  >
                    <select
                      {...register("case_category")}
                      className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                    >
                      <SelectOptions
                        data={optionQuery.data?.data["Case Category"]}
                      />
                    </select>
                    <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                      <BsChevronDown />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-300 text-lg text-accent-blue px-6 py-2 rounded-md font-bold">
                Special Category
              </div>
              <div className="m-8 grid grid-cols-3 gap-8">
                {/* <div className="flex items-center gap-1">
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
                </div> */}
                {/* <Select
                  name="special_category"
                  options={optionQuery.data?.data["Special Category"]}
                /> */}
                <div
                  className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                >
                  <select
                    {...register("special_category")}
                    className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                  >
                    <SelectOptions
                      data={optionQuery.data.data["Special Category"]}
                    />
                  </select>
                  <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                    <BsChevronDown />
                  </div>
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
                  <div
                    className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                  >
                    <select
                      {...register("court")}
                      className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                    >
                      <SelectOptions data={optionQuery.data?.data.Court} />
                    </select>
                    <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                      <BsChevronDown />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    State
                  </div>
                  <div
                    className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                  >
                    <select
                      {...register("state")}
                      className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                    >
                      <SelectOptions data={stateCityJson.states} />
                    </select>
                    <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                      <BsChevronDown />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    District
                  </div>
                  <div
                    className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                  >
                    <select
                      {...register("district")}
                      className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                    >
                      <SelectOptions data={stateCityJson["Andhra Pradesh"]} />
                    </select>
                    <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                      <BsChevronDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* petitioner */}
            <div
              className={`${
                tab === "petitioner" ? "flex" : "hidden"
              } w-full h-full flex-col`}
            >
              <div className="bg-gray-300 text-lg text-accent-blue px-6 py-2 rounded-md font-bold">
                Petitioner Details
              </div>
              <div className="m-8 grid grid-cols-3 gap-8">
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Type
                  </div>
                  <div
                    className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                  >
                    <select
                      {...register("petitioner.petitioner_type")}
                      className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                    >
                      <SelectOptions
                        data={optionQuery.data.data["Petition Type"]}
                      />
                    </select>
                    <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                      <BsChevronDown />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Name
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("petitioner.petitioner_name")}
                    type={"text"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">Age</div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("petitioner.petitioner_age")}
                    type={"number"}
                  />
                </div>
              </div>
              <div className="m-8 grid grid-cols-3 gap-8">
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    State
                  </div>
                  <div
                    className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                  >
                    <select
                      {...register("petitioner.petitioner_state")}
                      className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                    >
                      <SelectOptions data={stateCityJson.states} />
                    </select>
                    <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                      <BsChevronDown />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Country
                  </div>
                  <div
                    className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                  >
                    <select
                      {...register("petitioner.petitioner_country")}
                      className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                    >
                      <SelectOptions data={["India", "other"]} />
                    </select>
                    <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                      <BsChevronDown />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Address
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("petitioner.petitioner_address")}
                    type={"text"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    District
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("petitioner.petitioner_district")}
                    type={"text"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    City
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("petitioner.petitioner_city")}
                    type={"text"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">Pin</div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("petitioner.petitioner_pin")}
                    type={"number"}
                  />
                </div>
              </div>
              <div className="m-8 grid grid-cols-3 gap-8">
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    e-mail
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("petitioner.petitioner_email")}
                    type={"email"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Mobile number
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("petitioner.petitioner_city")}
                    type={"tel"}
                  />
                </div>
              </div>
              <div className="m-8 grid grid-cols-3 gap-8">
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Department
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("petitioner.petitioner_department")}
                    type={"text"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Total Petitions
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("petitioner.petitioner_total_petition")}
                    type={"number"}
                  />
                </div>
              </div>
            </div>
            {/* respondent */}
            <div
              className={`${tab === "respondent" ? "flex" : "hidden"} flex-col`}
            >
              <div className="bg-gray-300 text-lg text-accent-blue px-6 py-2 rounded-md font-bold">
                Respondent Details
              </div>
              <div className="m-8 grid grid-cols-3 gap-8">
                {/* <div className="flex border border-gray-300 overflow-hidden min-h-[70%] rounded-md flex-col">
                  <div className="bg-gray-300 text-accent-blue font-bold text-lg px-6 py-2">
                    Address
                  </div>
                  <textarea
                    cols={30}
                    rows={20}
                    className="focus:outline-none px-6 py-2"
                    placeholder="write respondent details here ...."
                  ></textarea>
                </div> */}
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    name
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("respondent.respondent_name")}
                    type={"text"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    relation
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("respondent.respondent_relation")}
                    type={"text"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    gender
                  </div>
                  <div
                    className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                  >
                    <select
                      {...register("respondent.respondent_gender")}
                      className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                    >
                      <SelectOptions data={["male", "female", "other"]} />
                    </select>
                    <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                      <BsChevronDown />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Father
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("respondent.respondent_father")}
                    type={"text"}
                  />
                </div>
              </div>
              <div className="m-8 grid grid-cols-3 gap-8">
                <div className="flex flex-col col-span-3 gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Address
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("respondent.respondent_address")}
                    type={"text"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Country
                  </div>
                  <div
                    className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                  >
                    <select
                      {...register("respondent.respondent_country")}
                      className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                    >
                      <SelectOptions data={["India", "other"]} />
                    </select>
                    <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                      <BsChevronDown />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    City
                  </div>
                  <div
                    className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                  >
                    <select
                      {...register("respondent.respondent_city")}
                      className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                    >
                      <SelectOptions data={stateCityJson["Andhra Pradesh"]} />
                    </select>
                    <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                      <BsChevronDown />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Email
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("respondent.respondent_email")}
                    type={"email"}
                  />
                </div>
              </div>
            </div>
            {/* act */}
            <div className={`${tab === "act" ? "flex" : "hidden"} flex-col`}>
              <div className="bg-gray-300 text-lg text-accent-blue px-6 py-2 rounded-md font-bold">
                Act Detailsclass
              </div>
              <div className="m-8 grid grid-cols-3 gap-8">
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Title
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("act.act_title")}
                    type={"text"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Rule
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("act.act_rule")}
                    type={"text"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Section
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("act.section")}
                    type={"text"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Rule number
                  </div>
                  <input
                    className="bg-white border-gray-200 focus:outline-accent-blue border-2 rounded-md px-2 py-1"
                    {...register("act.rule_no")}
                    type={"text"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    Belongs to
                  </div>
                  <div
                    className={`relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
                  >
                    <select
                      {...register("petitioner.petitioner_country")}
                      className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
                    >
                      <SelectOptions data={["central gov", "state gov"]} />
                    </select>
                    <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
                      <BsChevronDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute gap-4 justify-end -translate-x-16 px-8 bottom-8 flex w-full">
            <Button
              type="fill"
              color="accent-orange"
              className={`shadow-lg ${
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
              className={`shadow-lg ${
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
              className={`shadow-lg ${
                tab !== "act" ? "hidden" : ""
              } shadow-gray-300`}
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

const SelectOptions = ({ data }: { data: string[] }) => {
  return (
    <>
      <option value="">select</option>
      {data?.map((option, index) => {
        return (
          <option key={index} value={option as string}>
            {option}
          </option>
        )
      })}
    </>
  )
}

export default FilePetition
