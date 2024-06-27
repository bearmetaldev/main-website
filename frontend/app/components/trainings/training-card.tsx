import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TrainingCardProps {
  icon: string;
  title: string;
  content: string;
}

const TrainingCard: React.FC<TrainingCardProps> = ({
  icon,
  title,
  content,
}) => {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-lg bg-slate-900 bg-opacity-50 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-950/50">
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-950/10 px-8 py-20 transition-colors duration-500 group-hover:bg-slate-950/20">
        <div className="relative z-10 mb-8 mt-2 h-20">
          <Image src={icon} alt={title} width={140} height={140} />
        </div>
        <p className="relative z-10 text-center text-base leading-relaxed text-gray-200">
          {content.split(" ").slice(0, 50).join(" ") + "..."}
        </p>
      </div>
      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 5 }}
        transition={{
          repeat: Infinity,
          duration: 20, // Slowed down the animation
          ease: "easeInOut",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-10 transition-opacity duration-500 group-hover:opacity-50"
      />
    </div>
  );
};

export default TrainingCard;
