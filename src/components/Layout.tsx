import React, { ReactNode, useState } from "react"
import useAuth from "../auth/auth"
import Footer from "./Footer"
import dynamic from "next/dynamic"
import Header from "./Header"
import SideNav from "./SideNav"

const Layout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header />
      <div className="flex overflow-auto h-[100%] w-full">
        {user && <SideNav />}
        <main className="h-full w-full flex pt-32 flex-col overflow-y-auto overflow-x-hidden items-center">
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
