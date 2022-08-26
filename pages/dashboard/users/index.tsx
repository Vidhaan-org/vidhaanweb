import Link from "next/link"
import React from "react"
import { AiOutlinePlus, AiOutlineUser } from "react-icons/ai"
import { User } from "../../../src/auth/User"
import Button from "../../../src/components/Button"
import ColorTag from "../../../src/components/ColorTag"
import Error from "../../../src/components/Error"

const ManageUsers = () => {
  // const { data, isLoading, isSuccess } = useGetUsers()
  // if (isLoading) return <Loading />
  // if (isSuccess)
  return (
    <div className="h-auto min-h-full flex flex-col w-full px-10 pb-4 pt-14">
      <div className="flex gap-4 h-min">
        <Link href="/dashboard/users/add">
          <Button color="accent-orange" type="fill">
            <div className="flex text-lg items-center gap-2 px-1 py-2">
              <AiOutlineUser />
              <div className="">Add User</div>
            </div>
          </Button>
        </Link>
        <Button color="accent-orange" type="fill">
          <div className="flex text-lg items-center gap-2 px-1 py-2">
            <AiOutlinePlus />
            <div className="">Add Task</div>
          </div>
        </Button>
      </div>
      <div className="flex flex-col mt-8">
        <div className="grid px-6 py-2 rounded-md text-accent-blue font-semibold gap-4 bg-gray-300 grid-cols-4">
          <div className="">Name</div>
          <div className="">Permissions</div>
          <div className="">Expertise</div>
          <div className="">User Type</div>
        </div>
        {/* {data.map((user) => (
            <TableRow data={user} />
          ))} */}
        <TableRow
          data={{
            first_name: "Ram",
            last_name: "Prashad",
            id: 1,
            tab_permission: ["lawyer"],
            user_type: "Advocate",
            username: "vidhaan23",
          }}
        />
        <TableRow
          data={{
            first_name: "Rahul",
            last_name: "Sharma",
            id: 2,
            tab_permission: ["UGC Executive"],
            user_type: "Super Admin",
            username: "ashok23",
          }}
        />
      </div>
    </div>
  )
  return <Error />
}

const TableRow = ({ data }: { data?: User }) => {
  return (
    <div className="grid group px-4 py-3 border-b mx-2 gap-4 border-gray-400 grid-cols-4">
      <div className="group-hover:text-black text-gray-800 font-semibold">
        {data?.first_name + " " + data?.last_name}
        {/* Arpit Mehta */}
      </div>
      <div className="flex gap-1 no-scrollbar w-full overflow-x-auto items-center">
        {data?.tab_permission?.map((per) => (
          <ColorTag color="blue" text={per} />
        ))}
      </div>
      <div className="flex gap-1 no-scrollbar w-full overflow-x-auto items-center">
        <ColorTag color="red" text="Contempt" />
        <ColorTag color="blue" text="Civil" />
        <ColorTag color="yello" text="Writ" />
      </div>
      <div className="flex justify-between items-center">
        <div className="font-semibold">{data?.user_type}</div>
        <Link href={`/dashboard/users/sldjk`}>
          <button className="bg-[#6B7AAC] text-white rounded-md font-semibold text-sm px-3 py-1">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ManageUsers
