import { useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";

interface Props {
  title: string;
  content: string;
  image: string;
  i: number;
  range: number[];
  target: number;
  progress: MotionValue<number>;
  color: string;
}

const CardParallax = ({
  i,
  title,
  content,
  image,
  progress,
  target,
  range,
  color,
}: Props) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Add spring physics to scrollYProgress for smoother transitions
  const smoothScrollProgress = useSpring(scrollYProgress, {
    damping: 15,
    stiffness: 100,
    mass: 0.5,
  });

  // Use the smooth scroll progress for transforms
  const scaleProgress = useTransform(smoothScrollProgress, [0, 1], [1.5, 1]);

  // Add spring physics to the main scale animation
  const smoothScale = useSpring(useTransform(progress, range, [1, target]), {
    damping: 20,
    stiffness: 80,
  });

  return (
    <div
      ref={container}
      className="h-screen flex justify-center items-center sticky top-0"
    >
      <motion.div
        style={{
          scale: smoothScale,
          backgroundColor: color,
          top: `calc(-10% + ${i * 35}px)`,
        }}
        className="w-11/12 md:w-8/12 h-[35%] md:h-3/6 relative rounded-2xl flex"
        initial={{ opacity: 0.8 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-4/6 md:w-3/6 flex flex-col px-6 md:px-20 py-20 md:py-28 items-start">
          <motion.button
            className="px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border border-black rounded-[40px] transform"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            Our Services
          </motion.button>
          <h3 className="my-3 md:my-5 text-normal font-bold md:font-semibold md:text-5xl">
            {title}
          </h3>
          <p className="text-sm md:text-lg">{content}</p>
        </div>
        <div className="relative w-[60%] md:w-[50%] h-[100%] rounded-r-xl md:rounded-xl overflow-hidden">
          <motion.div
            style={{ scale: scaleProgress }}
            className="w-[100%] h-[100%] flex justify-center items-center"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.img
              className="w-full h-full md:h-auto md:w-4/6 object-cover rounded-none md:rounded-2xl"
              src={image}
              loading="lazy"
              alt={title}
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardParallax;
