import React from "react";
import { motion, MotionValue, useMotionTemplate } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface ContactButtonProps {
  color: MotionValue<string>;
}

export default function ContactButton({ color }: ContactButtonProps) {
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      style={{
        border,
        boxShadow,
      }}
      whileHover={{
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
    >
      Contact us
      <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
    </motion.button>
  );
}
