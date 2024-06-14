interface Props {
  imageUrl: string;
}
const SmallCard = ({ imageUrl }: Props) => {
  return (
    <div >
      <img src={imageUrl} alt="card" loading="lazy" className="rounded-xl h-[12rem] w-[9rem] object-cover hover:scale-110 transform transition hover:shadow-lg" />
    </div>
  )
}

export default SmallCard
