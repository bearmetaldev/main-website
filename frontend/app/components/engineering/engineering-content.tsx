import React, { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import ContactButton from "./contact-button";
import StarryBackground from "./starry-background";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function EngineeringContent() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid h-full place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="mb-3 leading-tight text-center"> Engineering</h1>
        <p className="my-6 max-w-xl text-center text-base leading-snug md:text-lg md:leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Blandit ultrices lacus turpis
          rhoncus. Neque lectus at vitae feugiat eget eu cursus venenatis.
          Vestibulum rhoncus sed consectetur mollis et. Adipiscing porta
          sagittis ultrices faucibus. Massa sociis enim eget erat massa purus
          nisi diam facilisis. Lectus adipiscing at semper etiam et dictum ut.
          In consequat imperdiet proin amet ut at. Non tortor elementum purus a
          tortor tellus eget. Suspendisse diam mauris sed amet eu faucibus
          tincidunt. Diam sit suspendisse aliquet nunc.
        </p>
        <ContactButton color={color} />
      </div>
      <StarryBackground />
    </motion.section>
  );
}
