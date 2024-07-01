import React from "react";
import HeroTitle from "./hero-title";
import HeroDescription from "./hero-description";
import HeroButton from "./hero-button";

export default function HeroContent() {
  return (
    <div className="hero-content text-neutral-content pl-0">
      <div className="absolute 2xl:left-80 lg:left-60 w-1/3">
        <HeroTitle />
        <HeroDescription />
        <div className="hero-button-wrapper">
          <HeroButton />
        </div>
      </div>
    </div>
  );
}
