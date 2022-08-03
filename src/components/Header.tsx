import Image from "next/image"
import React, { useState } from "react"
import vidLogo from "../../public/images/logo-md.png"
import ugc from "../../public/images/ugc-logo-md.png"
import Button from "./Button"
import Toggle from "./Toggle"
import { BsMap } from "react-icons/bs"
import { AiOutlinePhone, AiOutlineUser } from "react-icons/ai"

const Header = () => {
  const [darkToggle, setDarkToggle] = useState<boolean>(false)
  return (
    <div className="flex shadow-md flex-col fixed w-full">
      <div className="bg-accent-blue items-center text-white flex justify-between px-7 py-2">
        <div className="flex h-14">
          <Image src={vidLogo} objectFit="contain" />
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
          <Toggle setToggleEnabled={setDarkToggle} toggleEnabled={darkToggle} />
        </div>
      </div>
      <div className="items-center text-accent-blue bg-white flex justify-between px-7 py-2">
        <div className="ml-4 flex h-14">
          <Image src={ugc} objectFit="contain" />
        </div>
        <div className="flex text-xl">
          <div className="px-6 gap-1 font-semibold cursor-pointer flex">
            Features
          </div>
          <div className="px-6 items-center gap-1 border-x-2 border-accent-blue font-semibold cursor-pointer flex">
            <AiOutlinePhone /> Contact Us
          </div>
          <div className="px-6 gap-1 font-semibold cursor-pointer flex">
            <AiOutlineUser /> login
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
