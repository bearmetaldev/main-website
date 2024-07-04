import dynamic from "next/dynamic";
import Hero from "./components/hero/hero";

const Web3 = dynamic(() => import("./components/web3/web3"));
const Engineering = dynamic(
  () => import("./components/engineering/engineering")
);
const Trainings = dynamic(() => import("./components/trainings/trainings"));
const Contact = dynamic(() => import("./components/contact/contact"));

export default function Page() {
  return (
    <div
      className="relative snap-y snap-mandatory bg-no-repeat h-screen overflow-y-scroll smooth-scroll"
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
