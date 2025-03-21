import Avatars from "./avatars";

const MediumCard = () => {
  return (
    <div className="bg-emerald-100 md:bg-white h-40 w-40 md:h-48 md:w-48 rounded-xl overflow-hidden relative p-4 hover:scale-110 transform transition hover:shadow-lg">
      <Avatars />

      <div className="mt-2 md:mt-2 flex flex-col gap-0 md:gap-1">
        <h2 className="text-lg md:text-xl font-bold">Pro Team</h2>
        <p className="text-xs md:text-sm">
          We are here to help your project become green
        </p>
      </div>
    </div>
  );
};

export default MediumCard;
