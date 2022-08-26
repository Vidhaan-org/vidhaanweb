import { useRouter } from "next/router"
import React, { useState } from "react"
import { History } from "../../../src/api/cases/Case"
import { useGetCaseByCNR } from "../../../src/api/cases/caseService"
import Button from "../../../src/components/Button"
import Error from "../../../src/components/Error"
import Loading from "../../../src/components/Loading"

const Case = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, isSuccess } = useGetCaseByCNR(id as string)
  const [tab, setTab] = useState<"judgement" | "case">("case")

  if (isLoading) return <Loading />
  if (isSuccess)
    return (
      <div className="flex w-full overflow-y-auto h-full flex-col">
        <div className="border-l-8 flex flex-col px-9 py-10 border-accent-blue w-full bg-gray-200">
          <div className="text-3xl text-accent-blue font-bold">
            {data?.petitioner[0]?.petitioner_name +
              " vs University Grants Commission"}
          </div>
          <div className="text-xl text-accent-blue font-semibold">
            {new Date(data?.ia[0]?.filing_date).toDateString()}
          </div>
        </div>
        <div className="flex flex-col px-8 py-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex gap-3 flex-col text-lg font-semibold">
              <div className="flex gap-2 items-center">
                <div className="">CNR number:</div>
                <div className="rounded-full cursor-default text-red-500 font-semibold px-3 py-1 mr-auto bg-red-200">
                  {data?.cnr_number ? data.cnr_number : "null"}
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="">Article/Section:</div>
                <div className="rounded-full cursor-default text-red-500 whitespace-nowrap font-semibold px-3 py-1 bg-red-200">
                  Section 85 CPC
                </div>
                <div className="rounded-full cursor-default text-red-500 whitespace-nowrap font-semibold px-3 py-1 bg-red-200">
                  Section 85 CPC
                </div>
              </div>
            </div>
            <div className="flex gap-3 flex-col text-lg font-semibold">
              <div className="flex gap-2 items-center">
                <div className="">Petitioner:</div>
                <div className="font-normal">
                  {data?.respondent && data?.petitioner[0]?.petitioner_name}
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="">Respondent:</div>
                <div className="font-normal">
                  {data?.respondent && data?.respondent[0]?.respondent_name}
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="">Upcomming Dates:</div>
                <div className="font-normal">
                  {new Date(data?.ia[0]?.next_date!).toDateString()}
                </div>
              </div>
            </div>
          </div>
          {data.history[0] && (
            <div className="flex mt-10 text-center flex-col w-full bg-gray-100 rounded-md border border-gray-300">
              <div className="grid grid-cols-4 font-semibold p-2 bg-gray-300 text-accent-blue">
                <div className="">Judge</div>
                <div className="">Hearing Date</div>
                <div className="">Purpose</div>
              </div>
              {data.history.map((value) => (
                <TableRow data={value} key={value.id} />
              ))}
            </div>
          )}
          <div className="shadow-md mt-3 w-min shadow-gray-400 rounded-md">
            {/* <Button type="fill" color="accent-orange">
              <div className="py-1">View Details</div>
            </Button> */}
          </div>
          {/* Case Summary */}
          <div className="text-lg mt-4 font-semibold my-2 ">
            {tab === "case" ? "Case Summary:" : "Judgement Summary:"}
          </div>

          <div className="rounded-md h-max flex flex-col overflow-hidden bg-gray-200 border border-gray-400">
            <div className="bg-gray-400 px-8 text-gray-400 py-2">lsdjflk</div>
            <div className="px-8 py-4 h-max">
              The legislature has stipulated that a child born from a marriage
              which is null and void under Section 11 is legitimate, regardless
              of whether the birth has taken place before or after the
              commencement of Amending Act 68 of 1976 .One of the grounds on
              which a marriage is null and void under Section 11 read with
              clause of Section 5 is that the marriage has been contracted when
              one of the parties had a spouse living at the time of marriage. A
              second marriage contracted by a Hindu during the subsistence of
              the first marriage is, therefore, null and void. Sub-section 3 of
              Section 16 stipulates that such a child who is born from a
              marriage which is null and void, will have a right in the property
              only of the parents
            </div>
          </div>
          <div className="my-4 flex justify-between">
            <div className="shadow-md shadow-gray-400 rounded-md">
              <Button
                onClick={() =>
                  setTab((e) => (e === "case" ? "judgement" : "case"))
                }
                type="fill"
                color="accent-orange"
              >
                <div className="py-2">
                  {tab === "case" ? "View Judgement summary" : "back"}
                </div>
              </Button>
            </div>
            <div className="shadow-md shadow-gray-400 rounded-md">
              <Button type="fill" color="accent-orange">
                <div className="py-2">View Online Judgement</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  return <Error />
}

const TableRow = ({ data }: { data: History }) => {
  return (
    <div className="grid grid-cols-4 text-center p-2 items-center border-t border-gray-300 hover:bg-gray-200">
      <div className="mr-5 line-clamp-1">{data?.judge}</div>
      <div className="mr-5 line-clamp-1">
        {new Date(data.hearing_date).toDateString()}
      </div>
      <div className="line-clamp-1">{data.purpose_of_hearing}</div>
    </div>
  )
}

export default Case
