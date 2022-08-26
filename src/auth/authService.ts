import { useMutation, useQuery } from "@tanstack/react-query"
import {
  BASE_API_URL,
  fetcher,
  REST_METHODS,
  sendJsonData,
} from "../api/apiService"
import useAuth from "./auth"
import { RegisterFields, User } from "./User"

export const useGetUsers = () => {
  const { token } = useAuth()

  return useQuery(["users-all", token], (): Promise<User[]> => {
    return fetcher(`${BASE_API_URL}/user/profile/`, token)
  })
}

export const useRegisterUser = () => {
  const { token } = useAuth()

  return useMutation(
    ["user-register", token],
    (data: RegisterFields): Promise<any> => {
      return sendJsonData(
        `${BASE_API_URL}/user/`,
        data,
        token,
        REST_METHODS.POST
      )
    }
  )
}
