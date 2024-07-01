"use client";
import { motion } from "framer-motion";
import NavLink from "./nav-link";

interface NavRightProps {
  scrollToSection: (sectionId: string) => void;
  isMobile?: boolean;
}

export default function NavRight({ scrollToSection, isMobile }: NavRightProps) {
  const links = [
    { text: "About", sectionId: "about" },
    { text: "Web3", sectionId: "web3" },
    { text: "Engineering", sectionId: "engineering" },
    { text: "Trainings", sectionId: "trainings" },
    { text: "Contact", sectionId: "contact" },
  ];

  return (
    <motion.div
      className={`flex ${
        isMobile ? "flex-col items-end" : "flex-row items-center"
      } space-y-4 lg:space-y-0 lg:space-x-6`}
    >
      {links.map((link) => (
        <NavLink
          key={link.sectionId}
          text={link.text}
          onClick={() => scrollToSection(link.sectionId)}
          isMobile={isMobile}
        />
      ))}
    </motion.div>
  );
}
