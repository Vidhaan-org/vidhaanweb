import React, { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen overflow-y-auto overflow-x-hidden">
      <Header />
      <main className="min-h-full mt-20 w-full flex flex-col items-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
