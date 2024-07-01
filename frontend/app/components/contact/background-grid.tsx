import React, { useEffect, useState } from "react";

export default function BackgroundGrid() {
  const [size, setSize] = useState({ columns: 0, rows: 0 });

  useEffect(() => {
    generateGridCount();
    window.addEventListener("resize", generateGridCount);
    return () => window.removeEventListener("resize", generateGridCount);
  }, []);

  const generateGridCount = () => {
    const columns = Math.floor(document.body.clientWidth / 75);
    const rows = Math.floor(document.body.clientHeight / 75);
    setSize({
      columns,
      rows,
    });
  };

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950" />
        <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-1/2 right-1/2 w-1/3 h-1/3 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950">
        <div
          className="grid h-full w-full"
          style={{
            gridTemplateColumns: `repeat(${size.columns}, minmax(75px, 1fr))`,
            gridTemplateRows: `repeat(${size.rows}, minmax(75px, 1fr))`,
          }}
        >
          {[...Array(size.rows * size.columns)].map((_, i) => (
            <div
              key={i}
              className="h-full w-full border-[1px] border-white border-opacity-5"
            />
          ))}
        </div>
      </div>
    </>
  );
}
