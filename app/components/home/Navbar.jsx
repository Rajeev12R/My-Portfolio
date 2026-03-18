import React, { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const links = ["Home", "About", "Projects", "Certifications"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleScroll = (link) => {
    setActive(link);
    setIsOpen(false);

    const sectionMap = {
      "Home": "home",
      "About": "about",
      "Projects": "projects",
      "Certifications": "certifications"
    };

    const sectionId = sectionMap[link];
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:w-auto sm:px-0 max-w-[100vw] transition-all duration-300">
      
      {/* Desktop / Tablet Navigation */}
      <div className="hidden sm:block relative overflow-x-auto no-scrollbar rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-1">
        <div
          className="relative flex items-center justify-center gap-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 min-w-max mx-auto w-fit"
        >
          {links.map((link) => {
            const isActive = active === link;

            return (
              <button
                key={link}
                onClick={() => handleScroll(link)}
                className={`relative px-3 py-1 text-sm transition
                ${isActive ? "text-white bg-white/20 rounded-2xl py-2 px-4" : "text-white/70 hover:text-white/90"}`}
              >
                {isActive && (
                  <span
                    className="absolute left-1/2 -translate-x-1/2
                  -top-3.5 h-0.75 w-9 rounded-3xl
                  bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                  />
                )}

                {link}
              </button>
            );
          })}

          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="ml-2 px-4 py-1.5 rounded-full text-sm text-white bg-white/20 hover:bg-white/30 transition backdrop-blur whitespace-nowrap"
          >
            Book a Call
          </button>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="sm:hidden flex items-center justify-between px-5 py-3 rounded-2xl bg-black/60 backdrop-blur-2xl border border-white/20 shadow-lg w-full max-w-sm mx-auto">
        <span className="font-semibold text-white/90 text-sm tracking-widest uppercase shadow-black drop-shadow-md">Portfolio</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none p-1 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
        >
          {isOpen ? <LuX size={20} /> : <LuMenu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-4 right-4 bg-black/60 backdrop-blur-3xl border border-white/20 rounded-2xl p-4 flex flex-col gap-2 sm:hidden shadow-2xl max-w-sm mx-auto transition-all animate-in fade-in slide-in-from-top-4">
          {links.map((link) => {
            const isActive = active === link;
            return (
              <button
                key={link}
                onClick={() => handleScroll(link)}
                className={`relative w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all
                ${isActive ? "text-cyan-400 bg-white/10 border border-white/10" : "text-white/70 hover:bg-white/5 hover:text-white"}`}
              >
                {link}
              </button>
            );
          })}
          <div className="h-px w-full bg-white/10 my-2" />
          <button
            onClick={() => {
              setIsOpen(false);
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="w-full text-center px-4 py-3 rounded-xl text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors"
          >
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
