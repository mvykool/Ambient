interface Props {
  imageUrl: string;
}
const SmallCard = ({ imageUrl }: Props) => {
  return (
    <div >
      <img srcSet={imageUrl} width={120} height={180} alt="card" loading="lazy" className="rounded-xl hover:scale-110 transform transition hover:shadow-lg" />
    </div>
  )
}

export default SmallCard
