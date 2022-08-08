import React, { useState } from "react"
import Button from "../../../src/components/Button"

const Case = () => {
  const [tab, setTab] = useState<"judgement" | "case">("case")
  return (
    <div className="flex w-full h-full flex-col">
      <div className="border-l-8 flex flex-col px-9 py-10 border-accent-blue w-full bg-gray-200">
        <div className="text-3xl text-accent-blue font-bold">
          Hari nivas vs University Grants Commission
        </div>
        <div className="text-xl text-accent-blue font-semibold">
          {`(24 April, 1973)`}
        </div>
      </div>
      <div className="flex flex-col h-full px-8 py-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex gap-3 flex-col text-lg font-semibold">
            <div className="flex gap-2 items-center">
              <div className="">CNR number:</div>
              <div className="rounded-full cursor-default text-red-500 font-semibold px-3 py-1 mr-auto bg-red-200">
                CGHC01-043756-2019
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
              <div className="font-normal">Lorem, ipsum.</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="">Respondent:</div>
              <div className="font-normal">Lorem, ipsum.</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="">Upcomming Dates:</div>
              <div className="font-normal">Lorem, ipsum.</div>
            </div>
          </div>
        </div>
        {/* Case Summary */}
        <div className="text-lg font-semibold my-2 mt-auto">
          {tab === "case" ? "Case Summary:" : "Judgement Summary:"}
        </div>
        <div className="rounded-md flex flex-col overflow-hidden bg-gray-200 border border-gray-400">
          <div className="bg-gray-400 px-8 text-gray-400 py-2">lsdjflk</div>
          <div className="px-8 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            libero eligendi atque vitae recusandae hic asperiores neque esse,
            nobis veniam alias nesciunt beatae nulla dignissimos dolore
            obcaecati animi non laboriosam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nostrum cum eveniet ad nulla
            voluptatum. Porro ab nemo eos, rerum vel temporibus assumenda at,
            architecto consectetur perspiciatis, molestias suscipit eius unde!
            Necessitatibus delectus atque deserunt quos sed nihil, repellat odio
            ea omnis expedita voluptatibus nemo sapiente sint dolorum nulla
            exercitationem quisquam nam impedit fugit, quae vitae nobis. Numquam
            harum fugit laboriosam! Iure sequi vero repellendus eveniet. Eum
            quam, pariatur sequi ullam ipsum explicabo similique et nostrum,
            consectetur, aliquam ea quis illum? Exercitationem doloremque
            doloribus assumenda obcaecati tenetur vitae nostrum, reiciendis
            aperiam? Magnam iure eum laborum officia corporis ex! Aut sed sit
            possimus voluptatum accusamus rem, impedit libero quo voluptate
            placeat, sapiente ut, quaerat similique alias aspernatur sequi. Ex a
            illum beatae? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nihil magnam beatae quos consequuntur excepturi, doloribus
            recusandae repudiandae doloremque voluptatem harum voluptatum
            commodi, reiciendis odit delectus voluptas placeat, enim
            consequatur. Repudiandae. Sapiente nesciunt asperiores quia corrupti
            ea saepe. Nemo assumenda harum quo. Repellat doloribus quasi
            necessitatibus voluptatum, ipsum obcaecati vero esse minima aliquam
            optio quia unde numquam, nostrum ex id excepturi.
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
}

export default Case
