import React from "react"

const SelectOptions = ({
  data,
  selected,
}: {
  data?: string[]
  selected?: boolean
}) => {
  return (
    <>
      {!selected && <option value="">select</option>}
      {data?.map((option, index) => {
        return (
          <option className="text-black" key={index} value={option as string}>
            {option}
          </option>
        )
      })}
    </>
  )
}

export default SelectOptions
