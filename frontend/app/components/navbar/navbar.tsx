"use client";
import { useState, useEffect } from "react";
import NavRight from "./nav-right";
import Logo from "./logo";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Changed from 768 to 1024
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
    <nav className="pb-16 bg-gradient-to-b from-slate-950 from-50% to-transparent text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        {isMobile ? (
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        ) : (
          <NavRight scrollToSection={scrollToSection} />
        )}
      </div>
      {isMobile && isOpen && (
        <div className="pb-32 bg-gradient-to-b from-slate-950 from-50% to-transparent mt-4">
          <NavRight scrollToSection={scrollToSection} isMobile={true} />
        </div>
      )}
    </nav>
  );
}
