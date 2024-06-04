interface Props {
  title: string
  content: string
  image: string
}

const CardParallax = ({ title, content, image }: Props) => {
  return (
    <div className="h-screen flex justify-center items-center sticky top-0">
      <div className="w-[300px] md:w-[700px] h-[170px] md:h-[300px] relative -top-[10%] rounded-xl bg-primary">
        <p>{title}</p>
        <p>{content}</p>
        <div>
          <div>
            <img className="w-1/2" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardParallax
