import React, { ReactNode } from "react"

const Button = ({
  type,
  color,
  rounded,
  textColor,
  onClick,
  children,
  className,
  width = "min",
}: {
  type: "transparent" | "outline" | "fill"
  color?: "accent-orange" | "accent-blue"
  rounded?: boolean
  textColor?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  children?: ReactNode
  className?: string
  width?: "auto" | "min"
}) => {
  return (
    <div
      onClick={onClick}
      className={`${className} px-3 py-1 w-${width} items-center flex gap-1 whitespace-nowrap font-semibold hover:brightness-125 cursor-default ${textColor} ${
        type === "transparent"
          ? "bg-none"
          : type === "fill"
          ? color === "accent-blue"
            ? "bg-accent-blue text-white"
            : "bg-accent-orange text-white"
          : color === "accent-blue"
          ? "border border-accent-blue hover:bg-[#ffffff04]"
          : color === "accent-orange"
          ? "border border-accent-orange hover:bg-[#ffffff04]"
          : `border border-gray-300 hover:bg-[#ffffff04]`
      } ${rounded ? "rounded-full" : "rounded-md"}`}
    >
      {children}
    </div>
  )
}

export default Button
