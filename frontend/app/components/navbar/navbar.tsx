"use client";
import { useState, useEffect } from "react";
import NavRight from "./nav-right";
import Logo from "./logo";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className="pb-16 bg-gradient-to-b from-slate-950 from-50% to-transparent text-white p-4 fixed w-full top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        {isMobile ? (
          <motion.button
            onClick={toggleMenu}
            className="text-white focus:outline-none relative w-6 h-6"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <FiX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <FiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ) : (
          <NavRight scrollToSection={scrollToSection} />
        )}
      </div>
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, width: 0 }}
            animate={{ opacity: 1, height: "auto", width: "auto" }}
            exit={{ opacity: 0, height: 0, width: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-b from-slate-950 from-90% to-transparent pb-4 pr-4 pl-2 overflow-hidden absolute right-0"
          >
            <div className="p-4">
              <NavRight scrollToSection={scrollToSection} isMobile={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
