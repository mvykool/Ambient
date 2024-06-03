interface Props {
  title: string
  content: string
  image: string
}

const CardParallax = ({ title, content, image }: Props) => {
  return (
    <div className="h-screen flex justify-center items-center sticky top-0">
      <div className="w-[300px] md:w-[700px] h-[170px] md:h-[300px] rounded-xl bg-primary">
        <p>{title}</p>
        <p>{content}</p>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default CardParallax
