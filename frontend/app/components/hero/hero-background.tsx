import React from "react";

interface HeroBackgroundProps {
  children: React.ReactNode;
}

export default function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <div
      className="snap-start hero h-screen p-10"
      style={{
        background: `linear-gradient(180deg, rgb(2 6 23) 11.08%, rgba(15, 17, 26, 0.80) 55.47%, rgb(2 6 23)), url('/hero-metal.png') lightgray 50% / cover no-repeat`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
