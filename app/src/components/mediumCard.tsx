import Avatars from "./avatars"

const MediumCard = () => {
  return (
    <div className="bg-white h-48 w-48 rounded-xl relative p-4">
      <Avatars />

      <div className="mt-5 flex flex-col gap-2">
        <h2 className="text-2xl">Pro Team</h2>
        <p className="text-sm">We are here to help your project become green</p>
      </div>
    </div >
  )
}

export default MediumCard
