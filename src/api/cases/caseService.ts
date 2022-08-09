import { useQuery } from "@tanstack/react-query"
import { BASE_API_URL, fetcher } from "../apiService"
import { Case } from "./Case"

export const useGetCasesAll = () => {
  return useQuery(["cases-all"], (): Promise<Case> => {
    return fetcher(`${BASE_API_URL}/case`)
  })
}
