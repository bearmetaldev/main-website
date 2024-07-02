import React from "react";
import TrainingCard from "./training-card";

export default function TrainingsContent() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-4 py-8 md:py-10 lg:py-12 relative z-10 mt-2 md:mt-0">
      <h1 className="text-white mb-4 md:mb-16 lg:mb-20">Trainings</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl w-full">
        <TrainingCard
          icon="/rust-logo.png"
          title="Rust"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <TrainingCard
          icon="/git-logo.png"
          title="Git"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </div>
  );
}
