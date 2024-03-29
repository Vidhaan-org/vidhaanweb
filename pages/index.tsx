import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import lady from "../public/images/lady.png"
import poster from "../public/images/rafiki.png"
import news from "../public/images/rect.png"
import useAuth from "../src/auth/auth"
import Button from "../src/components/Button"
import Dialog from "../src/components/Dialog"
import Dynamic from "../src/components/Dynamic"
import List from "../src/components/List"
import Login from "../src/components/Login"

const Home: NextPage = () => {
  const router = useRouter()
  const { user } = useAuth()
  const [isLoginOpen, setLoginOpen] = useState<boolean>(false)

  return (
    <Dynamic>
      <Dialog show={isLoginOpen} onClose={() => setLoginOpen(false)}>
        <div className="min-w-[70vw] flex flex-col justify-center min-h-[70vh]">
          <Login close={() => setLoginOpen(false)} />
        </div>
      </Dialog>
      <div className="w-full flex flex-col">
        <Head>
          <title>Vidhaan Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <div className="bg-blue-500 border-t-4 border-red-500 px-4 text-white">
        welcome to vidhaan{" "}
        <span className="text-gray-300">{"//work in progress"}</span>
      </div> */}
        <div className="flex items-center justify-center h-[80vh]">
          <div className="flex flex-col"></div>
          <div className="grid grid-cols-5 max-w-[1100px]">
            <div className="flex justify-center h-full px-4 pr-8 flex-col col-span-3">
              <h1 className="text-accent-blue font-bold text-4xl">
                Sansthaan Samvidhaan Sanchaalan
              </h1>
              <h3 className="text-xl font-semibold mt-2">
                A one-stop solution for various judiciary purposes to get
                details about various cases, read AI powered-case summaries, and
                enhance knowledge about judicial bodies.
              </h3>
              <div className="w-[65%]">
                <Button
                  type="fill"
                  className="text-white px-8 shadow-lg shadow-gray-400 text-2xl mt-4 py-3"
                  color="accent-orange"
                  rounded
                  width="min"
                  onClick={() => {
                    user ? router.push("/dashboard/home") : setLoginOpen(true)
                  }}
                >
                  <div className="py-2 px-6">
                    {user ? "Dashboard" : "Login / Organization Login"}
                  </div>
                </Button>
              </div>
            </div>
            <div className="col-span-2 my-auto">
              <div className="flex h-full w-full">
                <Image src={lady} alt="la" objectFit="contain" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80vh] items-center py-24 flex-col flex bg-gray-300 mx-40 my-24">
          <h1 className="text-6xl mb-9 text-accent-blue font-bold">
            Key Highlights
          </h1>
          <div className="grid mx-32 grid-cols-3 h-full">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="min-h-[80vh] items-center py-24 flex-col flex mx-40 my-24">
          <h1 className="text-5xl mb-16 text-accent-blue font-bold">
            Latest News
          </h1>
          <List orientation="horizontal" buttons>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </List>
        </div>
      </div>
    </Dynamic>
  )
}

const Card = () => {
  return (
    <div className="bg-white grid min-w-[350px] grid-cols-1 w-auto h-full items-center justify-center mx-10 border-t-8 border-accent-blue rounded-lg">
      <div className="flex h-full mx-auto mb-6">
        <Image src={poster} alt="s" objectFit="contain" />
      </div>
      <div className="flex p-4 flex-col">
        <h3 className="text-accent-blue font-bold text-3xl text-center pb-2">
          Smart Notifications
        </h3>
        <p className="text-gray-700 font-semibold px-10 text-center">
          Choose your best timing when you want your food to be delivered Choose
          your best timing Choose your best timing when you want your food to be
          delivered Choose your best timing
        </p>
      </div>
    </div>
  )
}

const NewsCard = () => {
  return (
    <div className="bg-white grid shadow-xl shadow-gray-500 overflow-hidden min-w-[350px] grid-cols-1 w-auto h-full items-center justify-center mx-8 border-b-8 border-accent-blue rounded-lg">
      <div className="flex h-full w-full mb-6">
        <Image src={news} alt="a" width={350} objectFit="cover" />
      </div>
      <div className="flex flex-col pb-9 p-4">
        <h3 className="text-accent-blue font-bold text-3xl text-center pb-2">
          Lorem, ipsum dolor.
        </h3>
        <p className="text-gray-700 font-semibold px-4 text-center">
          Choose your best timing when you want your food to be delivered Choose
          your best timing Choose your best timing when you want your food to be
          delivered Choose your best timing
        </p>
      </div>
    </div>
  )
}

export default Home
