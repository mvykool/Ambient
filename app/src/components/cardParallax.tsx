interface Props {
  title: string
  content: string
  image: string
}

const CardParallax = ({ title, content, image }: Props) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <div className="flex flex-col relative -top-1/4 h-[500px] w-[1000px] rounded-[25px] p-[50px] bg-red-500 origin-top">
        <p>{title}</p>
        <p>{content}</p>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default CardParallax
