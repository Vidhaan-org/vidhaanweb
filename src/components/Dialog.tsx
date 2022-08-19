import React from "react"
import { BsBack } from "react-icons/bs"
import { FaChevronLeft } from "react-icons/fa"

const Dialog = ({
  show,
  children,
  onClose,
}: {
  show: boolean
  children?: React.ReactNode
  onClose: () => void
}) => {
  return (
    <div
      className={`${
        show ? "fixed flex" : "hidden"
      } top-0 bottom-0 right-0 left-0 z-50 items-center justify-center bg-[#00000048]`}
    >
      <div
        onClick={onClose}
        className="absolute top-0 bottom-0 right-0 left-0 z-[49] bg-transparent"
      ></div>
      <div className="z-50 flex min-h-full min-w-full flex-col rounded-xl bg-white p-6 shadow-xl sm:min-h-[100px] sm:min-w-[200px]">
        <div
          onClick={onClose}
          className="mb-6 flex items-center gap-2 font-semibold text-accent sm:hidden"
        >
          <FaChevronLeft />
          <div className=" items-center">Back</div>
        </div>
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  )
}

export default Dialog
