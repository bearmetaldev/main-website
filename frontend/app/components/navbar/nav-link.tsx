"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface NavLinkProps {
  text: string;
  onClick: () => void;
  isMobile?: boolean;
}

export default function NavLink({ text, onClick, isMobile }: NavLinkProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
    setTimeout(() => setIsClicked(false), 300);
  };

  if (isMobile) {
    return (
      <button
        onClick={handleClick}
        className={`text-right w-full py-2 pr-4 ${
          isClicked ? "text-violet-400" : "text-white"
        } transition-colors duration-300`}
      >
        {text}
      </button>
    );
  }

  return (
    <motion.button onClick={handleClick}>
      <a
        href="#"
        rel="nofollow"
        className="block h-[30px] overflow-hidden font-medium navlink"
      >
        <motion.div whileHover={{ y: -30 }}>
          <span className="flex items-center h-[30px] text-white">{text}</span>
          <span className="flex items-center h-[30px] text-violet-400">
            {text}
          </span>
        </motion.div>
      </a>
    </motion.button>
  );
}
