import Image from "next/image"
import React from "react"
import poster from "../../public/images/login.png"
import logo from "../../public/images/logo-blue.png"
import Button from "./Button"
import { useForm } from "react-hook-form"
import useAuth from "../auth/auth"
import { ToastLife, useToast } from "../hooks/toast"

const Login = ({ close }: { close: () => void }) => {
  const { register, handleSubmit } = useForm<{
    username: string
    password: string
  }>()
  const { login } = useAuth()
  const { showToast } = useToast()
  const submit = (e: { username: string; password: string }) => {
    login(e.username, e.password).then((res) => {
      if (res.status === 200) {
        close()
      }
    })
  }
  return (
    <div className="w-full grid grid-cols-2 h-full">
      <div className="flex text-lg flex-col mx-auto w-full max-w-[450px]">
        <div className="flex mb-6">
          <div className="-translate-x-3 flex">
            <Image src={logo} alt="" objectFit="contain" />
          </div>
        </div>
        <h4 className="text-xl mb-2 text-gray-800">Login to get started!</h4>
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-3">
          <input
            type="text"
            {...register("username")}
            required
            className="bg-none font-semibold border-2 focus:border-gray-500 focus:outline-none border-gray-400 rounded-md px-4 py-2"
            placeholder="Username"
          />
          <input
            type="password"
            required
            {...register("password")}
            className="bg-none font-semibold border-2 focus:border-gray-500 focus:outline-none border-gray-400 rounded-md px-4 py-2"
            placeholder="Password"
          />
          <div className="w-full shadow-[#00197030] shadow-lg flex">
            <Button type="fill" submit width="full" color="accent-blue">
              <div className="py-1">Login</div>
            </Button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex ">
          <Image src={poster} alt="" objectFit="contain" />
        </div>
      </div>
    </div>
  )
}

export default Login
