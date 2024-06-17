interface Props {
  imageUrl: string;
}
const SmallCard = ({ imageUrl }: Props) => {
  return (
    <div >
      <img
        srcSet={`${imageUrl}?w=100 100w, ${imageUrl}?w=200 200w, ${imageUrl}?w=400 400w, ${imageUrl}?w=800 800w`}
        sizes="(max-width: 800px) 100vw, 50vw"
        src={imageUrl}
        decoding="async"
        fetchPriority="auto"
        width={120}
        height={180}
        alt="card"
        loading="lazy"
        className="rounded-xl hover:scale-110 transform transition hover:shadow-lg" />
    </div>
  )
}

export default SmallCard
