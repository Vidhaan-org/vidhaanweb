import { useQuery } from "@tanstack/react-query"
import useAuth from "../../auth/auth"
import { BASE_API_URL, fetcher, sendJsonData } from "../apiService"
import { Case, CaseResponse } from "./Case"

export const useGetCasesAll = () => {
  const { token } = useAuth()
  return useQuery(["cases-all", token], (): Promise<Case[]> => {
    return fetcher(`${BASE_API_URL}/case/`, token)
  })
}

export const useGetCaseByCNR = (id: string) => {
  const { token } = useAuth()
  return useQuery(
    [`case-${id}`, token],
    (): Promise<CaseResponse> => {
      return fetcher(`${BASE_API_URL}/case/details/?id=${id}`, token)
    },
    {
      select(data) {
        return data.data
      },
      refetchOnWindowFocus: true,
    }
  )
}

// export const useCaseGraphQl = () => {
//   const {token } = useAuth()
//   return useQuery(
//     ['case-graph', token], (): Promise<Case> => {
//       return sendJsonData(``)
//     }
//   )
// }
