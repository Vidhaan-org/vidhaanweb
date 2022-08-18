import Image from "next/image"
import React, { useState } from "react"
import vidLogo from "../../public/images/logo-md.png"
import ugc from "../../public/images/ugc-logo-md.png"
import Button from "./Button"
import Toggle from "./Toggle"
import { BsMap } from "react-icons/bs"
import { AiOutlinePhone, AiOutlineUser } from "react-icons/ai"
import useAuth from "../auth/auth"
import Dynamic from "./Dynamic"

const Header = () => {
  const { login, user = undefined, logout } = useAuth()
  const [darkToggle, setDarkToggle] = useState<boolean>(false)
  return (
    <Dynamic>
      <div className="flex z-50 shadow-md flex-col fixed w-full">
        <div className="bg-accent-blue items-center text-white flex justify-between px-7 py-2">
          <div className="flex h-12">
            <Image alt="v" src={vidLogo} objectFit="contain" />
          </div>
          <div className="flex gap-4">
            <Button textColor="text-gray-200" type="transparent">
              <BsMap /> Site Map
            </Button>
            <div className="flex gap-2">
              <Button type="outline">+A</Button>
              <Button type="outline">A</Button>
              <Button type="outline">-A</Button>
            </div>
            <Toggle
              setToggleEnabled={setDarkToggle}
              toggleEnabled={darkToggle}
            />
          </div>
        </div>
        <div className="items-center text-accent-blue bg-white flex justify-between px-7 py-2">
          <div className="ml-5 flex h-12">
            <Image alt="f" src={ugc} objectFit="contain" />
          </div>
          <div className="flex text-xl">
            <div className="px-6 gap-1 font-semibold cursor-pointer flex">
              Features
            </div>
            <div className="px-6 items-center gap-1 border-x-2 border-accent-blue font-semibold cursor-pointer flex">
              <AiOutlinePhone /> Contact Us
            </div>

            <button
              onClick={() => {
                user ? logout() : login("vidhaan", "admin")
              }}
              className="px-6 gap-1 font-semibold cursor-pointer flex"
            >
              <AiOutlineUser /> <div>{user ? "logout" : "login"}</div>
            </button>
          </div>
        </div>
      </div>
    </Dynamic>
  )
}

export default Header
