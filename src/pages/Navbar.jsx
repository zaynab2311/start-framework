import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) setMenuOpen(false); // lg breakpoint
    handleScrollTop();
  };

  const linkStyle = ({ isActive }) =>
  `text-white text-lg uppercase font-bold px-2 py-4 rounded-3xl transition duration-300 ${
    isActive ? "bg-[#1abc9c]" : ""
  }`;


  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#2c3e50] shadow-md py-2" : "bg-[#2c3e50] py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <NavLink
          to="/"
          onClick={handleScrollTop}
          className="text-white font-bold text-4xl sm:text-3xl uppercase"
        >
          Start Framework
        </NavLink>

        <button
          className="text-white text-2xl lg:hidden border border-white/40 px-2 py-1 rounded-md focus:outline-none"
          onClick={handleToggle}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        <div
          className={`w-full lg:w-auto transition-all duration-500 overflow-hidden lg:flex ${
            menuOpen ? "max-h-screen" : "max-h-0 lg:max-h-full"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-4 py-4 lg:py-0">
            {["about", "portfolio", "contact"].map((route) => (
              <li key={route} className="w-full lg:w-auto px-4 lg:px-0">
                <NavLink
                  to={`/${route}`}
                  className={linkStyle}
                  onClick={handleLinkClick}
                >
                  {route}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
