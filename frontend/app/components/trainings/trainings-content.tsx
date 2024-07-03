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
          content="Maybe you do not need to port everything to Rust, but you sure can! Learn how to use Rust, where it is relevant and how to port complex applications from other languages."
        />
        <TrainingCard
          icon="/git-logo.png"
          title="Git"
          content="Our popular Git course teaches practical Git-Fu to your team for the smallest to the largest projects. Learn to rebase without fear!"
        />
      </div>
    </div>
  );
}
