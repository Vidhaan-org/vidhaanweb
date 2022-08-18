import React, { createContext, useContext, useState } from "react"
import { useRouter } from "next/router"
import { BASE_API_URL } from "../api/apiService"

interface Context {
  user: User | undefined
  token: Token | undefined
  login: (username: string, password: string) => Promise<void>
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
  const [token, setToken] = useState<Token | undefined>(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken")
      if (token) return { value: token, refresh: updateToken }
      return undefined
    }
    return undefined
  })
  const [user, setUser] = useState<User | undefined>(() => {
    if (typeof window !== "undefined") {
      const user: User | null = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") as string)
        : null
      if (user) return user
      return undefined
    }
    return undefined
  })
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  const login = async (username: string, password: string) => {
    setLoading(true)
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
        console.log(data)
        if (data.access) {
          localStorage.setItem("accessToken", data.access)
          setToken(token)
        }
        if (data.refresh) localStorage.setItem("refreshToken", data.refresh)
        localStorage.setItem("user", JSON.stringify({ username: username }))
        setUser({ username })
        router.push("/dashboard/home")
      }
    } catch (e) {
      if (response) {
        console.log("comming from login", await response.json())
      }
    }
    setLoading(false)
  }

  const logout = (): void => {
    if (typeof window !== "undefined") {
      setLoading(true)
      localStorage.clear()
      setUser(undefined)
      router.push("/")
      setLoading(false)
    }
  }

  const updateToken = async () => {
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
          setToken((token) => {
            if (token) return { ...token, value: data.access }
            return token
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
    <AuthContext.Provider value={value}>
      {loading ? "loading..." : props.children}
    </AuthContext.Provider>
  )
}
