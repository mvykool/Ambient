import { useEffect, useState } from "react"
import heroImg from "../assets/main.jpg"
import cardOne from "../assets/one.jpg"
import cardTwo from "../assets/main-hero.jpg"
import SmallCard from "../components/smallCard";
import CircleIcons from "../components/circleIcons";
import MediumCard from "../components/mediumCard";

const Hero = () => {

  const [colorClass, setColorClass] = useState('text-black');

  useEffect(() => {
    const timer = setTimeout(() => {
      setColorClass('text-primary');
    }, 1000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="flex flex-col md:flex-row items-center mt-20 mx-auto px-8 md:px-0 md:mt-40">
        {/* Main section text */}
        <div className="flex flex-col justify-center w-full md:w-3/6">
          <span className=" font-light text-gray-700  md:font-semibold md:text-gray-900">Sculpting the Future with Green Materials</span>

          <h1 className=" mt-5 font-bold text-4xl text-left md:text-3xl lg:text-7xl md:font-normal md:flex-wrap ">Leading the Way in <span className={`${colorClass} transition-colors duration-500`}>Sustainable</span>  Materials</h1>

          <div className="flex justify-between md:justify-start gap-0 md:gap-5 mt-10">
            <button className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-200">Selected Projects</button>
            <button className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-200">Work with Us</button>
          </div>
        </div>
        {/* Main section image */}
        <div className="hidden md:block absolute p-3 w-3/6 -z-10 top-0 right-0">
          <img src={heroImg} alt="hero-img" className="rounded-xl h-[90vh] w-full" />
        </div>

        <div className="absolute right-10 bottom-0 mb-[6%]">
          <MediumCard />
        </div>
      </main>

      {/*bottom section*/}

      <div className="flex justify-between absolute items-end bottom-0 mb-[5%] w-5/12 pr-5">
        <CircleIcons />

        <div className="flex gap-8">
          <SmallCard imageUrl={cardOne} />
          <SmallCard imageUrl={cardTwo} />
        </div>
      </div>
    </>
  )
}

export default Hero
