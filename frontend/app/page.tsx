import Hero from "./components/hero/hero";
import Web3 from "./components/web3/web3";
import Engineering from "./components/engineering/engineering";
import Trainings from "./components/trainings/trainings";
import Contact from "./components/contact/contact";

export default function Page() {
  return (
    <div
      className="relative snap-y snap-mandatory bg-no-repeat h-screen overflow-y-scroll"
      style={{
        backgroundImage: "url('/background.png')",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Hero />
      <Web3 />
      <Engineering />
      <Trainings />
      <Contact />
    </div>
  );
}
