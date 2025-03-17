import { useEffect, useState, useRef } from "react";
import cardOne from "../assets/one.webp";
import cardTwo from "../assets/main-hero.webp";
import SmallCard from "../components/smallCard";
import CircleIcons from "../components/circleIcons";
import MediumCard from "../components/mediumCard";
import { useInView } from "framer-motion";

const Hero = () => {
  const [colorClass, setColorClass] = useState("text-black");

  useEffect(() => {
    const timer = setTimeout(() => {
      setColorClass("text-[#e8618d]");
    }, 1000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Framer motion
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <main className="flex flex-col md:flex-row items-center md:items-start pt-20 md:pt-20 mx-auto px-8 md:px-0 min-h-[100vh]">
        {/* Main section text */}

        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          className="flex flex-col justify-center relative w-full md:w-5/12"
        >
          <span className=" font-light text-gray-700  md:font-semibold md:text-gray-900">
            Sculpting the Future with{" "}
            <span className="text-[#70925d]">Green Materials</span>
          </span>

          <h1 className=" mt-5 font-bold text-2xl text-left md:text-3xl lg:text-7xl md:font-normal md:flex-wrap ">
            Leading the Way in{" "}
            <span className={`${colorClass} transition-colors duration-500`}>
              Sustainable
            </span>{" "}
            Materials
          </h1>

          <div className="flex justify-between md:justify-start gap-0 md:gap-5 mt-10">
            <button className="px-3 md:px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-200 hover:scale-105 transition transform duration-100">
              Selected Projects
            </button>
            <button className="px-3 md:px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-200 hover:scale-105 transition transform duration-100">
              Work with Us
            </button>
          </div>
        </div>

        {/* Main section image */}

        <div className="hidden md:block absolute p-3 w-3/6 -z-10 top-0 right-0">
          <img
            sizes="(max-width: 800px) 100vw, 50vw"
            fetchPriority="high"
            role="presentation"
            src={"./ambientlogo.jpeg"}
            alt="hero-img"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
            className="rounded-xl object-top h-[90vh] object-cover w-full"
          />
        </div>

        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
          className="relative md:absolute right-0 md:right-10 bottom-0 mb-7 mt-16 md:my-[6%]"
        >
          <MediumCard />
        </div>

        {/*bottom section*/}

        <div className="flex flex-col-reverse md:flex-row items-center md:items-end md:justify-between relative md:absolute bottom-0 mb-[4.5%] pb-0 w-full md:w-[44%] md:pr-1 gap-7 md:gap-0">
          <CircleIcons />

          <div className="flex gap-8">
            <div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(-100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <SmallCard imageUrl={cardOne} />
            </div>
            <div
              style={{
                transform: isInView ? "none" : "translateX(-100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
            >
              <SmallCard imageUrl={cardTwo} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
