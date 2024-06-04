import CardParallax from "../components/cardParallax"
import { cards } from "../data"
import { useRef } from 'react'
import { useScroll } from 'framer-motion'

const Third = () => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <>
      <main className="flex flex-col items-center mx-auto my-8 md:my-20 px-8 md:px-0">
        <h2 className=" text-4xl text-center md:text-3xl lg:text-7xl w-5/6 md:w-4/6 mx-auto">
          Our mission is to provide the <span className="text-accent"> best services </span>
        </h2>

        {/*cards section*/}
        <div className="w-full absolute mt-0 md:mt-10 flex justify-center flex-col items-center">
          {cards.map((card, i) => {
            const targetScale = 1 - ((cards.length - i) * 0.05)
            return <CardParallax key={i} i={i} {...card} range={[i * 0.25, 1]} target={targetScale} progress={scrollYProgress} />
          })}
        </div>
      </main>
    </>
  )
}

export default Third
