import React from "react"

const CaseUpdate = () => {
  return (
    <div className="flex w-full overflow-y-auto h-full flex-col">
      <div className="border-l-8 flex flex-col px-9 py-10 border-accent-blue w-full bg-gray-200">
        <div className="text-3xl text-accent-blue font-bold">
          Hari nivas vs University Grants Commission
        </div>
        <div className="text-xl text-accent-blue font-semibold">
          {`(24 April, 1973)`}
        </div>
      </div>
      <div className="flex flex-col px-8 py-6">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="font-semibold">CNR Number</div>
            <div className="rounded-full cursor-default text-red-500 whitespace-nowrap font-semibold px-3 py-1 bg-red-200">
              Section 85 CPC
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="font-semibold text-accent-blue">
              Notification status:
            </div>
            <div className="font-normal">Lorem, ipsum.</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="font-semibold text-accent-blue">Respondent:</div>
            <div className="font-normal">Lorem, ipsum.</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="font-semibold text-accent-blue">Last Updated:</div>
            <div className="font-normal">Lorem, ipsum.</div>
          </div>
        </div>
        <div className="flex mt-10 text-center flex-col w-full bg-gray-100 rounded-md border border-gray-300">
          <div className="grid grid-cols-4 font-semibold p-2 bg-gray-300 text-accent-blue">
            <div className="">Judge</div>
            <div className="">Hearing Date</div>
            <div className="">Hearing Date</div>
            <div className="">Bussiness on Date</div>
          </div>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </div>
      </div>
    </div>
  )
}

const TableRow = () => {
  return (
    <div className="grid grid-cols-4 text-center p-2 items-center border-t border-gray-300 hover:bg-gray-200">
      <div className="mr-5 line-clamp-1">
        P.Suseela vs University Grants commission
      </div>
      <div className="mr-5 line-clamp-1">13 July 2019</div>
      <div className="mr-5 line-clamp-1">13 July 2019</div>
      <div className="line-clamp-1">
        P.Suseela vs University Grants commission
      </div>
    </div>
  )
}

export default CaseUpdate
