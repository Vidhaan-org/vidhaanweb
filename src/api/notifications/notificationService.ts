import { useQuery } from "@tanstack/react-query"
import useAuth from "../../auth/auth"
import { BASE_API_URL, fetcher } from "../apiService"
import { NotificationResponse, NotificationType } from "./notification"

export const useGetNotificationByType = (type: NotificationType) => {
  const { token } = useAuth()
  return useQuery(
    ["notification-all", token],
    (): Promise<NotificationResponse> => {
      return fetcher(`${BASE_API_URL}/case/notification/`, token)
    },
    {
      select: (data) => {
        return data.data.filter((item) => item.notify_type === type)
      },
    }
  )
}
