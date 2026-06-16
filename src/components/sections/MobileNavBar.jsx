import { useEffect } from "react";

export const MobileNavBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10, 10, 10, 0.8)] z-40 flex flex-col items-center justify-center
      transition-all duration-300 ease-in-out
      ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &#x2715;
      </button>
      <a
        href="#home"
        className="tex-gray-300 text-white transitiontransition-colors"
      >
        {" "}
        Home{" "}
      </a>
      <a
        href="#about"
        className="tex-gray-300 text-white transitiontransition-colors"
      >
        {" "}
        About{" "}
      </a>
      <a
        href="#projects"
        className="tex-gray-300 text-white transitiontransition-colors"
      >
        {" "}
        Projects{" "}
      </a>
      <a
        href="#contact"
        className="tex-gray-300 text-white transitiontransition-colors"
      >
        {" "}
        Contact{" "}
      </a>
    </div>
  );
};
