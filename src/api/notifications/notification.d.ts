export interface NotificationResponse {
  status_code: number
  data: {
    id: number
    case_title: string
    case_description: string
    notification_date: string
    action_date: string
    is_notification_recieved: boolean
    notify_type: NotificationType
    case: number[]
    notify_to: number[]
  }[]
}

export enum NotificationType {
  CaseUpdate = "New Case Update",
  docDeadline = "Doc Deadline",
  hearingUpdate = "Hearing Update",
  nextHearign = "Next Hearing",
  hearingInTowDays = "Hearing in 2 days",
  hearingAll = "Next Hearing" | "Hearing in 2 days" | "hearing Update",
}
