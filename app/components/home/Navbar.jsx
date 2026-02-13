import React, { useState } from "react";

const links = ["Home", "About", "Projects"];

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const handleScroll = (link) => {
    setActive(link);

    const sectionMap = {
      "Home": "home",
      "About": "about",
      "Projects": "projects"
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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="relative">
        <div
          className="relative flex items-center gap-6 px-6 py-2 rounded-full
          bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
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
            className="ml-2 px-4 py-1.5 rounded-full text-sm text-white
          bg-white/20 hover:bg-white/30 transition backdrop-blur"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
