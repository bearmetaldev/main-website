"use client";

import React from "react";
import Web3Content from "./web3-content";
import BGGrid from "./bg-grid";

export default function Web3() {
  return (
    <div className="snap-start relative overflow-hidden bg-slate-950 text-slate-200 h-screen">
      <div className="mx-10 gap-20 max-w-7xl px-4 md:px-8 h-full flex items-center">
        <Web3Content />
      </div>
      <BGGrid />
    </div>
  );
}
