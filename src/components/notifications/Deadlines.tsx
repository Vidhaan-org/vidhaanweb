import { useRouter } from "next/router"
import React from "react"
import {
  Notification,
  NotificationType,
} from "../../api/notifications/notification.d"
import { useGetNotificationByType } from "../../api/notifications/notificationService"
import { stateCityJson } from "../../api/utils/utilService"
import Button from "../Button"
import Error from "../Error"
import Loading from "../Loading"
import Select from "../Select"

const Deadlines = () => {
  const { data, isLoading, isSuccess } = useGetNotificationByType(
    NotificationType.docDeadline
  )
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
                <div className="text-gray-600 text-sm font-semibold">state</div>
                <Select options={stateCityJson.states} />
              </div>
              {/* <div className="flex flex-col gap-1">
                <div className="text-gray-600 text-sm font-semibold">Court</div>
                <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-gray-600 text-sm font-semibold">Year</div>
                <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
              </div> */}
            </div>
          </div>
          <div className="flex gap-4 ml-auto w-[50%] flex-col">
            {/* <div className="text-xl font-semibold text-accent-blue">
              Sort By
            </div>
            <div className="">
              <div className="flex flex-col gap-1">
                <div className="text-gray-600 text-sm font-semibold">Date</div>
                <Select options={["lksdjf", "lskdjfl", "lsdkfjl"]} />
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex mt-10 flex-col w-full bg-gray-100 rounded-md border border-gray-300">
          <div className="grid grid-cols-6 gap-4 font-semibold p-2 bg-gray-300 text-accent-blue">
            <div className="uppercase">cnr</div>
            <div className="">Case Name</div>
            <div className="">Due Date</div>
          </div>
          {data.map((item) => (
            <TableRow key={item.id} data={item} />
          ))}
        </div>
      </div>
    )
  return <Error />
}

const TableRow = ({ data }: { data: Notification }) => {
  const router = useRouter()
  return (
    <div className="grid grid-cols-6 p-2 border-b border-gray-300 gap-4 items-center group hover:bg-green-100">
      <div className="mr-5 line-clamp-1">CGHC01-043756-2019</div>
      <div className="mr-5 line-clamp-1">
        P.Suseela vs University Grants commission
      </div>
      <div className="mr-5 line-clamp-1">13 July 2019</div>
      <div className="font-semibold text-yellow-400 text-right">Moderate</div>
      <div className="font-semibold text-red-400 text-center">Pending</div>
      <Button type="fill" color="accent-blue" className="opacity-60">
        <div className="w-full text-center">View Details</div>
      </Button>
    </div>
  )
}

export default Deadlines
