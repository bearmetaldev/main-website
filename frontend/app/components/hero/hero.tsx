import React from "react";
import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";
import Navbar from "../navbar/navbar";
import { div } from "three/examples/jsm/nodes/Nodes.js";

export default function Hero() {
  return (
    <div id="about">
      <HeroBackground>
        <Navbar />
        <HeroContent />
      </HeroBackground>
    </div>
  );
}
