import React from "react"
import Button from "../../src/components/Button"

const Home = () => {
  return (
    <div className="flex h-full flex-col w-full px-8">
      <div className="flex mt-8">ss000</div>
      <div className="grid text-2xl gap-5 py-6 grid-cols-3">
        <Button
          type="fill"
          width="auto"
          className="justify-center py-9 opacity-60"
          color="accent-blue"
        >
          Cases
        </Button>
        <Button
          type="fill"
          width="auto"
          className="justify-center py-9 opacity-60"
          color="accent-blue"
        >
          Cases
        </Button>
        <Button
          type="fill"
          width="auto"
          className="justify-center py-9 opacity-60"
          color="accent-blue"
        >
          Cases
        </Button>
      </div>
      <div className="w-full mb-8 h-full grid gap-5 grid-cols-4">
        <div className="col-span-2 bg-gray-300 rounded-xl"></div>
        <div className="col-span-2 row-span-2 bg-gray-300 rounded-xl"></div>
        <Button
          type="fill"
          width="auto"
          className="justify-center py-9 opacity-60"
          color="accent-blue"
        >
          Cases
        </Button>
        <Button
          type="fill"
          width="auto"
          className="justify-center py-9 opacity-60"
          color="accent-blue"
        >
          Cases
        </Button>
      </div>
    </div>
  )
}

export default Home
