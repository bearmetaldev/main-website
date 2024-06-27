import React from "react";
import { motion } from "framer-motion";

type Spot = {
  color: string;
  size: string;
};

type Quadrant = {
  x: [number, number];
  y: [number, number];
};

type Position = {
  x: string;
  y: string;
};

export default function AnimatedBackground() {
  const spots: Spot[] = [
    { color: "bg-purple-500", size: "w-96 h-96" },
    { color: "bg-blue-500", size: "w-80 h-80" },
    { color: "bg-yellow-500", size: "w-104 h-104" },
    { color: "bg-pink-100", size: "w-88 h-88" },
    { color: "bg-cyan-500", size: "w-72 h-72" },
    { color: "bg-violet-500", size: "w-64 h-64" },
  ];

  const quadrants: Quadrant[] = [
    { x: [0, 50], y: [0, 50] },
    { x: [50, 100], y: [0, 50] },
    { x: [0, 50], y: [50, 100] },
    { x: [50, 100], y: [50, 100] },
  ];

  const getRandomPosition = (quadrant: number): Position => {
    const {
      x: [minX, maxX],
      y: [minY, maxY],
    } = quadrants[quadrant];

    return {
      x: `${minX + Math.random() * (maxX - minX)}vw`,
      y: `${minY + Math.random() * (maxY - minY)}vh`,
    };
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {spots.map((spot, index) => {
        const initialQuadrant = index % 4;
        const initialPos = getRandomPosition(initialQuadrant);
        const targetPos1 = getRandomPosition(Math.floor(Math.random() * 4));
        const targetPos2 = getRandomPosition(Math.floor(Math.random() * 4));
        const targetPos3 = getRandomPosition(Math.floor(Math.random() * 4));

        return (
          <motion.div
            key={index}
            className={`absolute ${spot.size} rounded-full ${spot.color} opacity-20 blur-3xl`}
            initial={initialPos}
            animate={{
              x: [initialPos.x, targetPos1.x, targetPos2.x, targetPos3.x],
              y: [initialPos.y, targetPos1.y, targetPos2.y, targetPos3.y],
            }}
            transition={{
              repeat: Infinity,
              duration: 30 + Math.random() * 10,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
          />
        );
      })}
    </div>
  );
}
