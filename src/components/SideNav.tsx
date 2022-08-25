import React from "react"
import { FiHome } from "react-icons/fi"
import {
  BsBell,
  BsCalendar,
  BsClipboard,
  BsFile,
  BsGear,
  BsGraphUp,
} from "react-icons/bs"
import { TbChevronRight, TbLogout } from "react-icons/tb"
import { useRouter } from "next/router"
import Dynamic from "./Dynamic"
import useAuth from "../auth/auth"
import { AiOutlineUser } from "react-icons/ai"

const SideNav = () => {
  const { logout } = useAuth()
  return (
    <Dynamic>
      <div className="flex pt-36 flex-col px-4 py-8 bg-accent-50 z-10 h-screen">
        <div className="flex gap-4 flex-col">
          <NavItem path="/home">
            <FiHome />
            <div className="text-gray-800 whitespace-nowrap">Home</div>
          </NavItem>
          <NavItem path="/users">
            <AiOutlineUser />
            <div className="text-gray-800 whitespace-nowrap">Users</div>
          </NavItem>
          <NavItem path="/cases">
            <BsClipboard />
            <div className="text-gray-800 whitespace-nowrap">Our Cases</div>
          </NavItem>
          <NavItem path="/calender">
            <BsCalendar />
            <div className="text-gray-800 whitespace-nowrap">Calender</div>
          </NavItem>
          <NavItem path="/analytics">
            <BsGraphUp />
            <div className="text-gray-800 whitespace-nowrap">Analytics</div>
          </NavItem>
          <NavItem path="/notification">
            <BsBell />
            <div className="text-gray-800 whitespace-nowrap">
              Notifications &amp; Deadlines
            </div>
          </NavItem>
          <NavItem path="/file_petition">
            <BsFile />
            <div className="text-gray-800 whitespace-nowrap">File Petition</div>
          </NavItem>
          <NavItem path="/settings">
            <BsGear />
            <div className="text-gray-800 whitespace-nowrap">Settings</div>
          </NavItem>
          <NavItem path="/" onClick={() => logout()}>
            <TbLogout />
            <div className="text-gray-800 whitespace-nowrap">Logout</div>
          </NavItem>
        </div>
      </div>
    </Dynamic>
  )
}

const NavItem = ({
  children,
  path = "",
  onClick,
}: {
  children: React.ReactNode
  path?: string
  onClick?: () => void
}) => {
  const router = useRouter()
  return (
    <button
      onClick={() => {
        if (path) router.push(`/dashboard${path}`)
        if (onClick) onClick()
      }}
      className={`group flex cursor-default items-center w-full font-semibold rounded-lg py-4 text-lg px-7 justify-between text-accent-blue ${
        path && router.route.includes(`/dashboard${path}`)
          ? "bg-accent-orange-100"
          : "hover:bg-gray-200"
      }`}
    >
      <div className="flex gap-3 items-center">{children}</div>
      <TbChevronRight
        className={` ml-4 ${
          path && router.route.includes(`/dashboard${path}`)
            ? "opacity-100"
            : "opacity-0"
        } group-hover:opacity-100`}
      />
    </button>
  )
}

export default SideNav
