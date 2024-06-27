"use client";

export default function HeroButton() {
  return (
    <div className="grid bg-transparent p-4">
      <GradientShadowButton />
    </div>
  );
}

const GradientShadowButton = () => {
  return (
    <div className="group relative w-fit transition-transform duration-300 active:scale-95">
      <button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500/50 to-fuchsia-500/50 p-0.5 duration-300 group-hover:scale-110">
        <span className="block rounded-md bg-slate-950/50 px-5 py-4 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
          CONTACT US
        </span>
      </button>
      <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-20 blur-xl transition-all duration-300 group-hover:opacity-50 group-active:opacity-50" />
    </div>
  );
};
