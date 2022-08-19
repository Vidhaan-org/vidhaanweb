import { useRouter } from "next/router"
import React from "react"
import useAuth from "./auth"

export function withPublic(Component: React.FC) {
  const ComponentWrapper = function WithPublic(props: any) {
    const auth = useAuth()
    const router = useRouter()

    if (auth.user) {
      // if (!res.data.roles.user) {
      //   router.replace('/')
      //   return <div>loading</div>
      // }
      router.replace("/")
      return <div>loading</div>
    }

    return <Component auth={auth} {...props} />
  }

  return ComponentWrapper
}

export function withProtected(Component: React.FC) {
  const ComponentWrapper = function WithProtected(props: any) {
    const auth = useAuth()
    const router = useRouter()

    if (!auth.user) {
      router.replace("/login")
      return <div>Loading...</div>
    }
    return <Component auth={auth} {...props} />
  }

  return ComponentWrapper
}
