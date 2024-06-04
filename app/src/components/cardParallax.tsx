import { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

interface Props {
  title: string
  content: string
  image: string
}

const CardParallax = ({ title, content, image }: Props) => {

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [2, 1])

  return (
    <div ref={container} className="h-screen flex justify-center items-center sticky top-0">
      <div className="w-[300px] md:w-[700px] h-[170px] md:h-[300px] relative -top-[10%] rounded-xl bg-primary">
        <p>{title}</p>
        <p>{content}</p>
        <div className="relative w-[60%] h-[100%] rounded-xl overflow-hidden">
          <motion.div style={{ scale: scaleProgress }} className="w-[100%] h-[100%]">
            <img className="w-1/2 object-cover rounded-xl" src={image} alt="" />
          </motion.div>
        </div>
      </div>
    </div >
  )
}

export default CardParallax
