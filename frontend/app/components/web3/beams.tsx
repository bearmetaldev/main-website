"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Beams() {
  const placements = [
    { top: 0, left: "5%", delay: 2 },
    { top: 350, left: "15%", delay: 4 },
    { top: 100, left: "25%", delay: 0 },
    { top: 300, left: "75%", delay: 3.5 },
    { top: 500, left: "70%", delay: 1 },
    { top: 500, left: "95%", delay: 5 },
    { top: 100, left: "80%", delay: 3 },
    { top: 400, left: "50%", delay: 1 },
    { top: 500, left: "20%", delay: 4 },
    { top: 100, left: "85%", delay: 2 },
    { top: 200, left: "10%", delay: 0.5 },
    { top: 250, left: "60%", delay: 5 },
  ];

  return (
    <>
      {placements.map((p, i) => (
        <Beam key={i} top={p.top} left={p.left} delay={p.delay} />
      ))}
    </>
  );
}

interface BeamProps {
  top: number;
  left: string;
  delay: number;
}

function Beam({ top, left, delay }: BeamProps) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ opacity: [0, 1, 0], y: 256 }}
      transition={{
        ease: "easeInOut",
        duration: 3,
        repeat: Infinity,
        repeatDelay: 0.5,
        delay,
      }}
      style={{ top, left }}
      className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-indigo-500/0 to-indigo-500"
    />
  );
}
