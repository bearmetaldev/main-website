"use client";

import { motion } from "framer-motion";

interface NavLinkProps {
  text: string;
}

export default function NavLink({ text }: NavLinkProps) {
  return (
    <a
      href="#"
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium navlink"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-white">{text}</span>
        <span className="flex items-center h-[30px] text-violet-400">
          {text}
        </span>
      </motion.div>
    </a>
  );
}
