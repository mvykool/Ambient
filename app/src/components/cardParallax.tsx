import { useRef } from 'react'
import { useScroll, motion, useTransform, MotionValue } from 'framer-motion'

interface Props {
  title: string
  content: string
  image: string,
  i: number,
  range: number[],
  target: number,
  progress: MotionValue<number>
}

const CardParallax = ({ i, title, content, image, progress, target, range }: Props) => {

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, target])

  return (
    <div ref={container} className="h-screen flex justify-center items-center sticky top-0">
      <motion.div style={{ scale, top: `calc(-10% + ${i * 25}px)` }} className="w-[300px] md:w-[700px] h-[170px] md:h-[300px] border border-green-500 relative rounded-xl bg-primary">
        <p>{title}</p>
        <p>{content}</p>
        <div className="relative w-[60%] h-[100%] rounded-xl overflow-hidden">
          <motion.div style={{ scale: scaleProgress }} className="w-[100%] h-[100%]">
            <img className="w-1/2 object-cover rounded-xl" src={image} alt="" />
          </motion.div>
        </div>
      </motion.div>
    </div >
  )
}

export default CardParallax
