import Hero from "./components/hero";
import Web3 from "./components/web3";
import Engineering from "./components/engineering";
import Trainings from "./components/trainings";
import Contact from "./components/contact";

export default function Page() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <Hero />
      <Web3 />
      <Engineering />
      <Trainings />
      <Contact />
    </div>
  );
}
