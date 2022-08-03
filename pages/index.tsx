import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import lady from "../public/images/lady.png"
import Button from "../src/components/Button"

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Vidhaan Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-blue-500 border-t-4 border-red-500 px-4 text-white">
        welcome to vidhaan{" "}
        <span className="text-gray-300">{"//work in progress"}</span>
      </div>
      <div className="flex items-center justify-center h-[80vh]">
        <div className="flex flex-col"></div>
        <div className="grid grid-cols-5 max-w-[1100px]">
          <div className="flex justify-center h-full px-4 pr-8 flex-col col-span-3">
            <h1 className="text-accent-blue font-bold text-4xl">
              Sansthaan Samvidhaan Sanchaalan
            </h1>
            <h3 className="text-xl font-semibold mt-2">
              A one-stop solution for various judiciary purposes to get details
              about various cases, read AI powered-case summaries, and enhance
              knowledge about judicial bodies.
            </h3>
            <Button
              type="fill"
              className="text-white px-8 shadow-lg shadow-gray-400 text-2xl mt-4 py-3"
              color="accent-orange"
              rounded
            >
              Organization Login
            </Button>
          </div>
          <div className="col-span-2 my-auto">
            <div className="flex h-full w-full">
              <Image src={lady} objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div className="max-w-[1100px] bg-gray-400"></div>
      </div>
    </div>
  )
}

export default Home
