import SecondSectionCards from "../components/secondSectionCards";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const Second = () => {
  // Framer motion
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    // Adding a margin to trigger animation slightly earlier
    margin: "0px 0px -100px 0px",
  });

  // Animation variants for heading
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier easing
      },
    },
  };

  return (
    <>
      <main className="flex flex-col items-center mx-auto my-8 px-8 md:px-0">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
          className="text-4xl text-center md:text-3xl lg:text-7xl w-5/6 md:w-4/6 mx-auto"
        >
          We're not just{" "}
          <span className="text-accent">building materials </span>- we're
          building a <span className="text-primary">legacy of change</span>
        </motion.h2>

        {/* Cards section with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isInView ? 1 : 0,
            transition: {
              delay: 0.3,
              duration: 0.5,
            },
          }}
          className="w-5/6"
        >
          <SecondSectionCards />
        </motion.div>
      </main>
    </>
  );
};

export default Second;
