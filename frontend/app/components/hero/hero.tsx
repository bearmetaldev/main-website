import HeroButton from "./hero-button";

export default function Hero() {
  return (
    <div
      className="snap-start hero h-screen p-10"
      style={{
        background: `linear-gradient(180deg, rgb(2 6 23) 11.08%, rgba(15, 17, 26, 0.80) 55.47%, rgb(2 6 23)), url('/hero-metal.png') lightgray 50% / cover no-repeat`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content text-left text-neutral-content">
        <div className="absolute left-40 w-1/3">
          <div className="w-[674px] h-[220px] leading-none">
            <span
              className="text-stone-200 text-[70px] font-bold"
              style={{ fontFamily: "Lexend" }}
            >
              Lorem ipsum dolor sit{" "}
            </span>
            <span
              className="text-[70px] font-bold"
              style={{
                fontFamily: "Lexend",
                background:
                  "linear-gradient(270deg, #482A88 5.89%, #AE9FCE 44.46%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              amet
            </span>
            <span
              className="text-[70px] font-bold"
              style={{
                fontFamily: "Lexend",
                background:
                  "linear-gradient(270deg, #482A88 5.89%, #AE9FCE 44.46%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}
              consectetur.
            </span>
          </div>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur. Urna metus mauris vel elit
            dui in hac. Dictum nec feugiat scelerisque nec lobortis tortor mi.
            Viverra arcu lacus ultricies habitant neque justo fusce justo magna.
          </p>
          <HeroButton />
        </div>
      </div>
    </div>
  );
}
