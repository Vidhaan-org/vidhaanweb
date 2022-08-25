import Image from "next/image"
import React from "react"
import footer from "../../public/images/footer-svg.png"
import digiIn from "../../public/images/digitalIn.png"
import { FaCopyright } from "react-icons/fa"
import { MdCopyright } from "react-icons/md"

const Footer = () => {
  return (
    <div className="flex text-white h-auto relative flex-col bg-accent-blue px-12 pt-8">
      <div className="absolute bottom-14 top-10 -left-6 right-0 flex">
        <Image src={footer} alt="" layout="fill" />
      </div>
      <div className="grid grid-cols-5 ">
        <div className="flex items-start -translate-x-5 col-span-2">
          <div className="flex">
            <Image src={digiIn} alt="" />
          </div>
        </div>
        <div className="flex font-semibold items-end flex-col gap-2">
          <div className="">About us</div>
          <div className="">About us</div>
          <div className="">About us</div>
          <div className="">About us</div>
          <div className="">About us</div>
        </div>
        <div className="flex font-semibold items-end flex-col gap-2">
          <div className="">About us</div>
          <div className="">About us</div>
          <div className="">About us</div>
          <div className="">About us</div>
          <div className="">About us</div>
        </div>
        <div className="flex font-semibold items-end flex-col gap-2">
          <div className="">About us</div>
          <div className="">About us</div>
          <div className="">About us</div>
          <div className="">About us</div>
          <div className="">About us</div>
        </div>
      </div>
      <div className="flex mt-16 items-center gap-2 text-lg mb-4 justify-center">
        <MdCopyright />
        <div className="">2022 Vidhaan. All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer
