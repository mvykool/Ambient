import heroImg from "../assets/hero.jpg"

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row items-center mt-20 mx-auto px-8 md:px-0 md:mt-40">
      {/* Main section text */}
      <div className="flex flex-col justify-center w-full md:w-3/6">
        <span className=" font-light text-gray-700  md:font-semibold md:text-gray-900">Sculpting the Future with Green Materials</span>

        <h1 className=" mt-5 font-bold text-4xl text-left md:text-8xl md:font-normal">Leading the Way in <span className="text-green-400">Sustainable</span>  Materials</h1>

        <div className="flex justify-between md:justify-start gap-0 md:gap-5 mt-10">
          <button className="px-4 py-2 rounded-lg border border-gray-200">Selected Projects</button>
          <button className="px-4 py-2 rounded-lg border border-gray-200">Work with Us</button>
        </div>
      </div>
      {/* Main section image */}
      <div className="hidden md:block absolute p-3 w-3/6 -z-10 top-0 right-0">
        <img src={heroImg} alt="hero-img" className="rounded-lg h-[90vh]" />
      </div>
    </main>
  )
}

export default Hero
