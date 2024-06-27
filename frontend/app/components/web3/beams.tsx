"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Beams() {
  const placements = [
    { top: 0, left: "5%", delay: 2 },
    { top: 384, left: "15%", delay: 4 },
    { top: 96, left: "25%", delay: 0 },
    { top: 288, left: "75%", delay: 3.5 },
    { top: 0, left: "70%", delay: 1 },
    { top: 64, left: "95%", delay: 5 },
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
        repeatDelay: 1.5,
        delay,
      }}
      style={{ top, left }}
      className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-indigo-500/0 to-indigo-500"
    />
  );
}
