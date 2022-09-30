export interface RegisterFields {
  user_type: "Super Admin" | "Advocate" | "UGC Executive"
  user_name: string
  tab_permission: "add_petition" | "add_user" | "view_analytics" | "add_task"
  expertise: "Writ" | "Cibil" | "Contempt"
}

export interface User {
  id: number
  username: string
  first_name: string
  last_name: string
  user_type: "Super Admin" | "Advocate" | "UGC Executive"
  tab_permission: string[]
}
