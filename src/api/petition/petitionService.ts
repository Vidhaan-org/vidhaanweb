import { useMutation } from "@tanstack/react-query"
import useAuth from "../../auth/auth"
import { ToastLife, useToast } from "../../hooks/toast"
import { PetitionFormFields } from "../../Types/form"
import { BASE_API_URL, sendJsonData } from "../apiService"

export const useFilePetition = () => {
  const { token } = useAuth()
  const { showToast } = useToast()
  return useMutation(
    ["file_petition", token],
    (e: PetitionFormFields) => {
      return sendJsonData(`${BASE_API_URL}/file_petition/`, { ...e }, token)
    },
    {
      onSuccess: () => {
        showToast("success", "pitition filed", ToastLife.SHORT)
      },
      onError: () => {
        showToast("error", "something went wrong", ToastLife.LONG)
      },
    }
  )
}
