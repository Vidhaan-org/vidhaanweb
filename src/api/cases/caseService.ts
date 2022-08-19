import { useQuery } from "@tanstack/react-query"
import useAuth from "../../auth/auth"
import { BASE_API_URL, fetcher } from "../apiService"
import { Case } from "./Case"

export const useGetCasesAll = () => {
  const { token } = useAuth()
  return useQuery(["cases-all"], (): Promise<Case> => {
    return fetcher(`${BASE_API_URL}/case/`, token)
  })
}
