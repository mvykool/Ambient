import heroImg from "../assets/hero.jpg"

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row items-center mt-20 mx-auto px-8">
      {/* Main section text */}
      <div className="flex flex-col justify-center">
        <span className=" font-light text-gray-700  ">Sculpting the Future with Green Materials</span>

        <h1 className=" mt-5 font-bold text-4xl text-left">Leading the Way in <span className="text-green-400">Sustainable</span>  Materials</h1>

        <div className="flex justify-between mt-10">
          <button className="px-4 py-2 rounded-lg border border-gray-200">Selected Projects</button>
          <button className="px-4 py-2 rounded-lg border border-gray-200">Work with Us</button>
        </div>
      </div>
      {/* Main section image */}
      <div className="hidden md:block absolute p-3 w-3/6 -z-10 top-0 right-0">
        <img src={heroImg} alt="hero-img" className="rounded-lg" />
      </div>
    </main>
  )
}

export default Hero
