import React, { ReactNode, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import SideNav from "./SideNav"

const Layout = ({ children }: { children: ReactNode }) => {
  const [login, setLogin] = useState(false)
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header setLogin={setLogin} />
      <div className="flex overflow-auto h-[100%] w-full">
        {login && <SideNav />}
        <main className="h-full w-full flex pt-32 flex-col overflow-y-auto overflow-x-hidden items-center">
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
