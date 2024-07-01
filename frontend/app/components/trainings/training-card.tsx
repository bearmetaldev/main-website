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
    <div className="group relative w-full max-w-80 md:max-w-xl lg:max-w-sm overflow-hidden rounded-lg bg-slate-600/30 p-0.5 transition-all duration-500 lg:hover:scale-[1.01] lg:hover:bg-slate-800/50 cursor-pointer">
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-800/10 px-6 py-5 md:py-16 lg:py-20 transition-colors duration-500 lg:group-hover:bg-slate-950/30">
        <div className="relative z-10 md:mb-6 lg:mb-8 md:mt-2 h-16 lg:h-20">
          <Image
            src={icon}
            alt={title}
            width={140}
            height={140}
            className="w-[70%] h-[70%] md:w-[100%] md:h-[100%] object-contain"
          />
        </div>
        <p className="relative z-10 text-center text-base leading-relaxed text-gray-200 trainings-description">
          {content.split(" ").slice(0, 50).join(" ") + "..."}
        </p>
      </div>
      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 3.5 }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-40 transition-opacity duration-500 lg:group-hover:opacity-50"
      />
    </div>
  );
};

export default TrainingCard;
