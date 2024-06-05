import cardOne from "../assets/secondsectionone.jpg"
import cardTwo from "../assets/secondsectiontwo.jpg"
import { useRef } from 'react'
import { useInView } from 'framer-motion'
const SecondSectionCards = () => {
  // Framer motion
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full my-16 md:my-28">
      { /* Card 1 */}
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}
        className="flex flex-col justify-center items-center text-white h-40 md:h-96 w-full md:w-2/6 relative hover:scale-110 transform duration-200 transition hover:shadow-lg">
        <img src={cardOne} className="absolute object-cover rounded-xl h-full w-full -z-10" alt="cardone" />
        <p className="text-lg text-center font-semibold">Follow us for more</p>
        <div className="flex gap-2 my-4">
          <i className="bx bxl-instagram-alt text-5xl"></i>
          <i className="bx bxl-facebook-square text-5xl"></i>
          <i className="bx bxl-twitter text-5xl"></i>
        </div>
      </div>
      {/* Card 2 */}
      <div
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.2s"
        }}
        className="bg-gray-100 relative flex flex-col p-5 md:p-10 items-center overflow-hidden rounded-xl w-full h-40 md:h-96 md:w-4/6">
        <h3 className="text-normal mt-0 md:mt-5 md:text-2xl text-center z-10">Join us in sculpting <br /> a green and sustainable world</h3>
        <button className="mt-6 md:mt-10 rounded-2xl bg-white z-10 px-3 md:px-5 py-2 md:py-3 text-sm md:text-normal hover:scale-110 transform transition hover:shadow-lg">Get Started</button>
        {/* falling pills*/}
        <div className="button px-4 py-2 text-sm bg-green-200 absolute rounded-2xl top-0 opacity-50">Ethics</div>
        <div className="button px-4 py-2 text-sm bg-green-200 absolute rounded-2xl top-0 opacity-50">Eco-friendly</div>
        <div className="button px-4 py-2 text-sm bg-green-200 absolute rounded-2xl top-0  opacity-50">Responsible</div>
        <div className="button px-4 py-2 text-sm bg-accent absolute rounded-2xl top-0 opacity-50">Progressive</div>
        <div className="button px-4 py-2 text-sm bg-accent absolute rounded-2xl top-0 opacity-50">Thoughtful</div>
        <div className="button px-4 py-2 text-sm bg-accent absolute rounded-2xl top-0 opacity-50">Sustainable</div>
        <div className="button px-4 py-2 text-sm bg-green-200 absolute rounded-2xl top-0 opacity-50">Ethics</div>
        <div className="button px-4 py-2 text-sm bg-green-200 absolute rounded-2xl top-0 opacity-50">Eco-friendly</div>
        <div className="button px-4 py-2 text-sm bg-green-200 absolute rounded-2xl top-0  opacity-50">Responsible</div>
        <div className="button px-4 py-2 text-sm bg-accent absolute rounded-2xl top-0 opacity-50">Progressive</div>
        <div className="button px-4 py-2 text-sm bg-accent absolute rounded-2xl top-0 opacity-50">Thoughtful</div>
        <div className="button px-4 py-2 text-sm bg-accent absolute rounded-2xl top-0 opacity-50">Sustainable</div>
      </div>
      {/* Card 3 */}
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}
        className="flex justify-center items-center h-40 md:h-96 w-full md:w-2/6 relative hover:scale-110 transform transition duration-200 hover:shadow-lg">
        <img src={cardTwo} className="absolute object-cover rounded-xl h-full w-full -z-10" alt="cartwo" />
        <i className="bx bxs-leaf text-7xl text-white"></i>
      </div>
    </div>
  )
}

export default SecondSectionCards
