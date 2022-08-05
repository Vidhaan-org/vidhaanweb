import React from "react"
import PetitionMap from "../../src/components/PetitionMap"

const FilePetition = () => {
  return (
    <div className="flex flex-col min-w-full px-8 pt-8">
      <PetitionMap stop="petitioner" />
    </div>
  )
}

export default FilePetition
