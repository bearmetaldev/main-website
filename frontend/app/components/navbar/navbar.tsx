"use client";

import { useState } from "react";
import NavRight from "./nav-right";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="absolute top-0 left-0 right-0 align-middle z-50 bg-transparent">
      <div className="py-4 px-12 flex items-center justify-between relative flipnav">
        <NavRight setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}
