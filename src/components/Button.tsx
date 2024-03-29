import React, { ReactNode } from "react"

const Button = ({
  type,
  color,
  submit,
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
  submit?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: ReactNode
  className?: string
  width?: "auto" | "min" | "full"
}) => {
  return (
    <button
      onClick={onClick}
      type={submit ? "submit" : "button"}
      className={`${className} px-3 py-1 w-${width} items-center flex gap-1 whitespace-nowrap font-semibold hover:brightness-125 justify-center text-center ${textColor} ${
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
    </button>
  )
}

export default Button
