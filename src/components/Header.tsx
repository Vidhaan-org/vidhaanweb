import Image from "next/image"
import React, { useEffect, useState } from "react"
import vidLogo from "../../public/images/logo-md.png"
import ugc from "../../public/images/ugc-logo-md.png"
import Button from "./Button"
import Toggle from "./Toggle"
import { BsMap } from "react-icons/bs"
import { AiOutlinePhone, AiOutlineUser } from "react-icons/ai"
import useAuth from "../auth/auth"
import Dynamic from "./Dynamic"
import Link from "next/link"
import Dialog from "./Dialog"
import Login from "./Login"
import { useRouter } from "next/router"

const Header = () => {
  const { user = undefined, logout } = useAuth()
  const [darkToggle, setDarkToggle] = useState<boolean>(false)
  const [isLoginOpen, setLoginOpen] = useState<boolean>(false)

  return (
    <Dynamic>
      <Dialog show={isLoginOpen} onClose={() => setLoginOpen(false)}>
        <div className="min-w-[70vw] flex flex-col justify-center min-h-[70vh]">
          <Login close={() => setLoginOpen(false)} />
        </div>
      </Dialog>
      <div className="flex z-20 shadow-md flex-col fixed w-full">
        <div className="bg-accent-blue items-center text-white flex justify-between px-7 py-2">
          <Link href="/">
            <a className="flex cursor-pointer h-12">
              <Image alt="v" src={vidLogo} objectFit="contain" />
            </a>
          </Link>
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
                user ? logout() : setLoginOpen(true)
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
