import { useRef } from 'react'
import { useScroll, motion, useTransform, MotionValue } from 'framer-motion'

interface Props {
  title: string
  content: string
  image: string,
  i: number,
  range: number[],
  target: number,
  progress: MotionValue<number>,
  color: string
}

const CardParallax = ({ i, title, content, image, progress, target, range, color }: Props) => {

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, target])

  return (
    <div ref={container} className="h-screen flex justify-center items-center sticky top-0">
      <motion.div style={{ scale, backgroundColor: color, top: `calc(-10% + ${i * 35}px)` }} className="w-11/12 md:w-8/12 h-[35%] md:h-3/6 relative rounded-2xl flex">
        <div className='w-4/6 md:w-3/6 flex flex-col px-6 md:px-20 py-20 md:py-28 items-start'>
          <button className='px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border border-black rounded-[40px] hover:scale-110 transform transition hover:shadow-lg'>Our Services</button>
          <h3 className=' my-3 md:my-5 text-normal font-bold md:font-semibold md:text-5xl '>{title}</h3>
          <p className='text-sm md:text-lg'>{content}</p>
        </div>
        <div className="relative w-[60%] md:w-[50%] h-[100%] rounded-r-xl md:rounded-xl overflow-hidden">
          <motion.div style={{ scale: scaleProgress }} className="w-[100%] h-[100%] flex justify-center items-center">
            <img className="w-full h-full md:h-auto md:w-4/6 object-cover rounded-none md:rounded-2xl hover:scale-110 transform transition hover:shadow-lg" src={image} loading='lazy' alt="" />
          </motion.div>
        </div>
      </motion.div>
    </div >
  )
}

export default CardParallax
