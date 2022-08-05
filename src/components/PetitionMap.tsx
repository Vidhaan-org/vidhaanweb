import { BsCheck } from "react-icons/bs"

const PetitionMap = ({
  stop,
}: {
  stop: "details" | "petitioner" | "respondent" | "act" | "done"
}) => {
  return (
    <div className="flex flex-col">
      <div className="relative flex justify-around">
        <div className="relative z-20 flex w-full font-semibold justify-around">
          <div className="flex h-9 w-9 items-center justify-center relative rounded-full border-4 border-white bg-accent-blue text-white">
            {stop === "details" ? 1 : <BsCheck />}
            <div className="absolute whitespace-nowrap -bottom-1 translate-y-full text-sm font-semibold text-gray-700">
              Case Details
            </div>
          </div>
          <div className="flex h-9 relative w-9 items-center justify-center rounded-full border-4 border-white bg-accent-blue text-white">
            {stop === "respondent" || stop === "act" || stop === "done" ? (
              <BsCheck />
            ) : (
              "2"
            )}
            <div className="absolute whitespace-nowrap -bottom-1 translate-y-full text-sm font-semibold text-gray-700">
              Petitioner
            </div>
          </div>
          <div className="flex h-9 w-9 relative items-center justify-center rounded-full border-4 border-white bg-accent-blue text-white">
            {stop === "done" || stop === "act" ? <BsCheck /> : "3"}
            <div className="absolute whitespace-nowrap -bottom-1 translate-y-full text-sm font-semibold text-gray-700">
              Respondent
            </div>
          </div>
          <div className="flex h-9 w-9 relative items-center justify-center rounded-full border-4 border-white bg-accent-blue text-white">
            {stop === "done" ? <BsCheck /> : "4"}
            <div className="absolute whitespace-nowrap -bottom-1 translate-y-full text-sm font-semibold text-gray-700">
              Act
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 z-10 w-[75%] -translate-y-1/2 border-2 border-accent"></div>
      </div>
    </div>
  )
}

export default PetitionMap
