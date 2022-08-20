import React from "react"
import { useForm, UseFormRegister } from "react-hook-form"
import { BsChevronDown } from "react-icons/bs"
import { PetitionFormFields } from "../Types/form"

const Select = ({
  name,
  options,
  className,
}: {
  name: string
  options?: string[] | { name: string; value: string }[]
  className?: string
}) => {
  const { register } = useForm()
  return (
    <div
      className={`${className} relative w-full border-2 overflow-hidden border-gray-200 rounded-md group`}
    >
      <select
        {...register(name)}
        className="appearance-none py-1 w-full line-clamp-1 bg-transparent pl-2 pr-8 outline-none"
      >
        <option value="">select</option>
        {options?.map((option, index) => {
          if (typeof option == "string")
            return (
              <option key={index} value={option as string}>
                {option}
              </option>
            )
          return (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          )
        })}
      </select>
      <div className="pointer-events-none absolute top-0 right-0 group-hover:bg-gray-300 flex h-full items-center justify-center bg-gray-200 px-2">
        <BsChevronDown />
      </div>
    </div>
  )
}

export default Select
