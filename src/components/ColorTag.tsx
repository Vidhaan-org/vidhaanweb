import React from "react"

const ColorTag = ({
  color,
  text,
}: {
  color: "red" | "blue" | "yello"
  text: string
}) => {
  return (
    <div
      className={`${
        color === "blue" ? "bg-[#8694c0]" : "bg-red-400"
      } cursor-default whitespace-nowrap rounded-full text-white px-3 py-0.5 text-sm font-semibold`}
    >
      {text}
    </div>
  )
}

export default ColorTag
