export default function Hero() {
  return (
    <div
      className="hero min-h-[40rem] p-10"
      style={{
        background: `linear-gradient(0deg, rgba(15, 17, 26, 0.71) 0%, rgba(15, 17, 26, 0.71) 100%), url('/hero-code-1.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="w-3/4">
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur. Urna metus mauris vel elit
            dui in hac. Dictum nec feugiat scelerisque nec lobortis tortor mi.
            Viverra arcu lacus ultricies habitant neque justo fusce justo magna.
            Enim velit at pellentesque blandit sem ullamcorper tempor. Non
            natoque in nulla nibh.
          </p>
          <button className="btn btn-secondary mt-5">CONTACT US</button>
        </div>
      </div>
    </div>
  );
}
