import React from "react";

export default function Logo() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href="#about" onClick={handleClick} className="text-xl">
      BEAR METAL DEVELOPMENT
    </a>
  );
}
