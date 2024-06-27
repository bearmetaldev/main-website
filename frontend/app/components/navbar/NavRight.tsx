"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";
import Logo from "./Logo";
import NavLink from "./NavLink";

interface NavRightProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function NavRight({ setIsOpen }: NavRightProps) {
  return (
    <div className="pt-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <IconContext.Provider value={{ color: "white" }}>
          <div>
            <FiMenu />
          </div>
        </IconContext.Provider>
        ;{" "}
      </motion.button>
      <Logo />
      <div className="flex items-center gap-6 absolute inset-y-0 right-0 pr-12">
        <NavLink text="About" />
        <NavLink text="Services" />
        <NavLink text="Contact" />
      </div>
    </div>
  );
}
