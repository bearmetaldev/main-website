import React from "react";
import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";
import Navbar from "../navbar/navbar";

export default function Hero() {
  return (
    <HeroBackground>
      <Navbar />
      <HeroContent />
    </HeroBackground>
  );
}
