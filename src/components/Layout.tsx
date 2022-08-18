import React, { ReactNode } from "react"
import useAuth from "../auth/auth"
import Header from "./Header"
import SideNav from "./SideNav"
import { useRouter } from "next/router"

const Layout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()
  const router = useRouter()
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header />
      <div className="flex overflow-auto h-[100%] w-full">
        {user && router.route.includes("/dashboard/") && <SideNav />}
        <main className="h-full w-full flex pt-32 flex-col overflow-y-auto overflow-x-hidden items-center">
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
