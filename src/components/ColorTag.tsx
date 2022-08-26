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
        color === "blue"
          ? "bg-[#8694c0]"
          : color === "yello"
          ? "bg-yellow-400"
          : "bg-red-400"
      } cursor-default whitespace-nowrap rounded-full h-min text-white px-3 py-0.5 text-sm font-semibold`}
    >
      {text}
    </div>
  )
}

export default ColorTag
