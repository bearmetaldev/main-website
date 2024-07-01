import React from "react";

export default function HeroTitle() {
  const gradientStyle = {
    fontFamily: "Lexend",
    background: "linear-gradient(270deg, #482A88 5.89%, #AE9FCE 44.46%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <div className="hero-title-wrapper w-[674px] h-[220px] leading-none">
      <span
        className="text-stone-200 text-[70px] font-bold"
        style={{ fontFamily: "Lexend" }}
      >
        Lorem ipsum dolor sit{" "}
      </span>
      <span className="text-[70px] font-bold" style={gradientStyle}>
        amet
      </span>
      <span className="text-[70px] font-bold" style={gradientStyle}>
        {" "}
        consectetur.
      </span>
    </div>
  );
}
