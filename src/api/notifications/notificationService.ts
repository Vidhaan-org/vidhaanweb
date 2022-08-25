import { useQuery } from "@tanstack/react-query"
import { filter } from "d3"
import useAuth from "../../auth/auth"
import { BASE_API_URL, fetcher } from "../apiService"
import { NotificationResponse, NotificationType } from "./notification.d"

export const useGetNotificationByType = (type: NotificationType) => {
  const { token } = useAuth()
  return useQuery(
    ["notification-all", token],
    (): Promise<NotificationResponse> => {
      return fetcher(`${BASE_API_URL}/case/notification/`, token)
    },
    {
      select: (data) => {
        if (type !== NotificationType.hearingAll)
          return data.data.filter((item) => item.notify_type === type)
        else
          return [
            ...data.data.filter(
              (item) => item.notify_type === NotificationType.hearingInTowDays
            ),
            ...data.data.filter(
              (item) => item.notify_type === NotificationType.hearingUpdate
            ),
            ...data.data.filter(
              (item) => item.notify_type === NotificationType.nextHearign
            ),
          ]
      },
    }
  )
}
