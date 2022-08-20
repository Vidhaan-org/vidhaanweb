import React, { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { BASE_API_URL } from "../api/apiService"
import { ToastLife, useToast } from "../hooks/toast"

interface Context {
  user: User | undefined
  token: Token | undefined
  login: (username: string, password: string) => Promise<Response>
  logout: () => void
}

export interface Token {
  value: string
  refresh: () => Promise<void>
}
interface User {
  username: string
}

const AuthContext = createContext<Context>({} as Context)

export default function useAuth(): Context {
  return useContext(AuthContext)
}

export const AuthProvider = (props: React.PropsWithChildren<{}>) => {
  const { showToast } = useToast()
  const [token, setToken] = useState<Token | undefined>()
  const [user, setUser] = useState<User | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fun = () => {
      const accesstoken = localStorage.getItem("accessToken")
      if (accesstoken) {
        setToken({
          value: accesstoken,
          refresh,
        })
      }
      console.log(token, "this from auth")
      const user: User | null = localStorage.getItem("user")
        ? { username: JSON.parse(localStorage.getItem("user") as string) }
        : null
      if (user) setUser(user)
    }
    fun()
  }, [])

  const router = useRouter()

  const login = async (username: string, password: string) => {
    let response: Response = {} as Response
    try {
      const customHeaders = new Headers()
      customHeaders.append("Content-Type", "application/json")

      response = await fetch(`${BASE_API_URL}/api/token/`, {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify({
          username,
          password,
        }),
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }
      if (response.status === 200) {
        const data: { access: string; refresh: string } = await response.json()
        if (data.access) {
          localStorage.setItem("accessToken", data.access)
          setToken((prev) => {
            if (prev) return { refresh, value: data.access }
          })
        }
        if (data.refresh) localStorage.setItem("refreshToken", data.refresh)
        localStorage.setItem("user", JSON.stringify({ username: username }))
        setUser({ username })
        router.push("/dashboard/home")
        showToast("success", "logged in!", ToastLife.SHORT)
      }
    } catch (e) {
      if (response) {
        console.log("comming from login", await response.json())
        showToast("error", "Incorrect username or password", ToastLife.SHORT)
      }
    }
    return response
  }

  const logout = (): void => {
    if (typeof window !== "undefined") {
      localStorage.clear()
      setUser(undefined)
      router.push("/")
      showToast("info", "logged out", ToastLife.SHORT)
    }
  }

  const refresh = async () => {
    let response: Response = {} as Response
    try {
      const customHeaders = new Headers()
      customHeaders.append("Content-Type", "application/json")

      response = await fetch(`${BASE_API_URL}/api/token/verify/`, {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify({
          refresh: localStorage.getItem("refreshToken"),
        }),
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }
      if (response.status === 200) {
        const data: { access: string; refresh: string } = await response.json()
        console.log(data, "token refreshed!!")
        if (data.access) {
          localStorage.setItem("accessToken", data.access)
          setToken((prev) => {
            if (prev) return { ...prev, value: data.access }
          })
        }
        if (data.refresh) localStorage.setItem("refreshToken", data.refresh)
      }
    } catch (e) {
      if (response) {
        console.log("comming from refresh", await response.json())
      }
    }
  }

  const value = {
    user,
    token,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  )
}
