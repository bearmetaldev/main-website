import React from "react";
import TrainingCard from "./training-card";

export default function TrainingsContent() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-4 py-12 relative z-10">
      <h1 className=" text-white mb-20">Trainings</h1>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl">
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
