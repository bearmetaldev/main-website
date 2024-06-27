"use client";

import React from "react";
import TrainingsContent from "./trainings-content";
import AnimatedBackground from "./animated-background";

export default function Trainings() {
  return (
    <div className="snap-start h-screen overflow-hidden bg-slate-950 relative">
      <AnimatedBackground />
      <TrainingsContent />
    </div>
  );
}
