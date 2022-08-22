import { useRouter } from "next/router"
import React from "react"
import { BsPinAngleFill } from "react-icons/bs"
import { NotificationType } from "../../api/notifications/notification.d"
import { useGetNotificationByType } from "../../api/notifications/notificationService"
import Button from "../Button"
import Error from "../Error"
import Loading from "../Loading"
import Select from "../Select"

const Hearings = () => {
  const { isLoading, isSuccess, data } = useGetNotificationByType(
    NotificationType.hearingAll
  )
  console.log(data)
  if (isLoading) return <Loading />
  if (isSuccess)
    return (
      <div className="flex flex-col h-full">
        <div className="grid gap-7  grid-cols-2 mt-5">
          <div className="flex  gap-4 flex-col">
            <div className="text-xl font-semibold text-accent-blue">
              Filter By
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col gap-1">
                <div className="text-gray-600 text-sm font-semibold">
                  Case Status
                </div>
                <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-gray-600 text-sm font-semibold">Court</div>
                <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-gray-600 text-sm font-semibold">Year</div>
                <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
              </div>
            </div>
          </div>
          <div className="flex gap-4 ml-auto w-[50%] flex-col">
            <div className="text-xl font-semibold text-accent-blue">
              Sort By
            </div>
            <div className="">
              <div className="flex flex-col gap-1">
                <div className="text-gray-600 text-sm font-semibold">Date</div>
                <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-10 flex-col w-full bg-gray-100 rounded-md border border-gray-300">
          <div className="grid grid-cols-5 gap-4 font-semibold p-2 bg-gray-300 text-accent-blue">
            <div className="uppercase">cnr</div>
            <div className="">Case Name</div>
            <div className="">Date</div>
          </div>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </div>
      </div>
    )
  return <Error />
}

const TableRow = () => {
  const router = useRouter()
  return (
    <div className="grid grid-cols-5 p-2 gap-4 items-center group hover:bg-gray-200">
      <div className="mr-5 line-clamp-1">CGHC01-043756-2019</div>
      <div className="mr-5 line-clamp-1">
        P.Suseela vs University Grants commission
      </div>
      <div className="mr-5 line-clamp-1">13 July 2019</div>
      <div className="flex">
        <Button
          type="fill"
          color="accent-blue"
          className="col-span-2 opacity-60"
        >
          <div className="w-full text-center">Manage Notifications</div>
        </Button>
      </div>
      <div className="grid grid-cols-3 items-center gap-3">
        <Button
          type="fill"
          color="accent-blue"
          className="col-span-2 opacity-60"
        >
          <div className="w-full text-center">View Details</div>
        </Button>
        <BsPinAngleFill className="text-xl ml-auto mr-8 group-hover:text-red-400 text-gray-500" />
      </div>
    </div>
  )
}

export default Hearings
