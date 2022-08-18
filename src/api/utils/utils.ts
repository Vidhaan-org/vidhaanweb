import { useQuery } from "@tanstack/react-query"
import useAuth from "../../auth/auth"
import { BASE_API_URL, fetcher } from "../apiService"
import OptionResponse from "./utils"
export const useGetOptions = () => {
  const { token } = useAuth()
  console.log(token)
  return useQuery(["options", token?.value], (): Promise<OptionResponse> => {
    return fetcher(`${BASE_API_URL}/case/option_list/`, token)
  })
}
