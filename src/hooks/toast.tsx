import Link from "next/link"
import React, { createContext, useContext, useEffect, useState } from "react"
import { BsCheckCircleFill, BsInfoCircle } from "react-icons/bs"
import { MdAddAlert, MdError } from "react-icons/md"

export enum ToastLife {
  SHORT = 2000,
  LONG = 5000,
  INFINITE = 180000,
}

interface Context {
  toastList: Toast[]
  showToast: (
    type: "alert" | "info" | "error" | "success",
    text: string,
    life: ToastLife,
    src?: string
  ) => void
  setToastList?: React.Dispatch<React.SetStateAction<Toast[]>>
}

interface Toast {
  id: number
  type: "alert" | "info" | "error" | "success"
  text: string
  life: ToastLife
  src?: string
}

const toastContext = createContext<Context>({
  toastList: [],
  showToast: (
    type: "alert" | "info" | "error" | "success",
    text: string,
    life: ToastLife,
    src?: string
  ) => {},
})

export const useToast = (): Context => {
  return useContext(toastContext)
}

export const ToastProvider = (props: React.PropsWithChildren<{}>) => {
  const [toastList, setToastList] = useState<Toast[]>([])

  const showToast = (
    type: "alert" | "info" | "error" | "success",
    text: string,
    life: ToastLife,
    src?: string
  ) => {
    setToastList((list) => [
      { type, text, id: Math.floor(Math.random() * 10000), life, src },
    ])
  }

  const value = { showToast, toastList, setToastList }

  return (
    <toastContext.Provider value={value}>
      {props.children}
      <ToastContainer />
    </toastContext.Provider>
  )
}

export const ToastContainer = () => {
  const { toastList: list, setToastList } = useToast()
  return (
    <div className="toast-list z-[100]">
      {list?.map((toast) => {
        return (
          <Toast
            list={list}
            key={toast.id}
            setToastList={setToastList}
            toast={toast}
          />
        )
      })}
    </div>
  )
}

const Toast = ({
  toast,
  list,
  setToastList,
}: {
  toast: Toast
  list: Toast[]
  setToastList?: React.Dispatch<React.SetStateAction<Toast[]>>
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const newList = list.filter((item) => toast.id != item.id)
      console.log(newList)
      setToastList!(newList)
    }, toast.life)
    return () => clearTimeout(timer)
  }, [list])

  const { src = "" } = toast

  switch (toast.type) {
    case "info":
      return (
        <Link href={src}>
          <a className="toast crimson text-accent-orange">
            <BsInfoCircle className="mr-1" />
            <div className="mx-1">{toast.text}</div>
          </a>
        </Link>
      )
      break
    case "alert":
      return (
        <Link href={src}>
          <a className="toast white text-white">
            <MdAddAlert className="mr-1" />
            <div className="mx-1">{toast.text}</div>
          </a>
        </Link>
      )
      break
    case "error":
      return (
        <Link href={src}>
          <a className="toast red text-red-500">
            <MdError className="mr-1" />
            <div className="mx-1">{toast.text}</div>
          </a>
        </Link>
      )
      break
    default:
      return (
        <Link href={src}>
          <a className="toast blue text-blue-500">
            <BsCheckCircleFill className="mr-1" />
            <div>{toast.text}</div>
          </a>
        </Link>
      )
  }
}
