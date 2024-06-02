interface Props {
  imageUrl: string;
}
const SmallCard = ({ imageUrl }: Props) => {
  return (
    <div >
      <img src={imageUrl} alt="card" className="rounded-xl h-[12rem] w-[9rem] object-cover" />
    </div>
  )
}

export default SmallCard
