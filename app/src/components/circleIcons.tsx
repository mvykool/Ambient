import { useRef } from 'react'
import { useInView } from 'framer-motion'

const CircleIcons = () => {
  // Framer motion
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })


  return (
    <div className="flex gap-3">
      <i
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
        }}
        className="bx bxs-tree text-xl bg-primary rounded-full w-8 h-8 flex items-center justify-center"></i>
      <i
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}
        className="bx bxs-sun text-xl bg-primary rounded-full w-8 h-8 flex items-center justify-center"></i>
      <i
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}
        className="bx bxs-droplet text-xl bg-primary rounded-full w-8 h-8 flex items-center justify-center"></i>
    </div>
  )
}

export default CircleIcons
