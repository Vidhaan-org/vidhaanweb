import { useRouter } from "next/router"
import React from "react"
import {
  Notification,
  NotificationType,
} from "../../api/notifications/notification.d"
import { useGetNotificationByType } from "../../api/notifications/notificationService"
import Button from "../Button"
import Error from "../Error"
import Loading from "../Loading"

const Updates = () => {
  const { data, isLoading, isSuccess } = useGetNotificationByType(
    NotificationType.CaseUpdate
  )
  console.log(data)
  if (isLoading) return <Loading />
  if (isSuccess)
    return (
      <div className="flex flex-col h-full gap-3">
        {data?.map((item) => (
          <Update key={item.id} data={item} />
        ))}
        {/* <Update />
      <Update />
      <Update />
      <Update />
      <Update />
      <Update />
      <Update />
      <Update /> */}
      </div>
    )
  return <Error />
}

const Update = ({ data }: { data?: Notification }) => {
  const router = useRouter()
  return (
    <div className="border-l-8 flex flex-col px-9 py-10 border-accent-blue w-full bg-gray-100">
      <div className="text-2xl items-center flex gap-2 text-accent-blue font-bold">
        <span>
          {data?.case?.petitioner[0]?.petitioner_name +
            " vs University Grants Commission"}
        </span>
        <span className="text-red-400">{`(${data?.case?.cnr_number})`}</span>
      </div>
      <div className="text-lg line-clamp-1 text-gray-500 font-semibold">
        he legislature has stipulated that a child born from a marriage which is
        null and void under Section 11 is legitimate
      </div>
      <div className="flex gap-1">
        <div className="text-baase text-accent-blue font-semibold">
          Date of Notification:
        </div>
        <div className="">{new Date(data?.action_date!).toDateString()}</div>
      </div>
      <div className="flex gap-3 mt-2">
        <Button
          onClick={() => router.push(`/dashboard/cases/${data?.case.id}`)}
          type="fill"
          color="accent-blue"
        >
          <div className="flex justify-center">View Details</div>
        </Button>
        <Button type="fill" className="bg-red-400">
          <div className="flex justify-center">
            Send notification to person involved
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Updates
