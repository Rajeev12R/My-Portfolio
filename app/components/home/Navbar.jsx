import React, { useState, useEffect } from "react";
import { LuMenu, LuX, LuSun, LuMoon } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const links = ["Home", "About", "Projects", "Certifications"];

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-8 h-8" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <LuSun className="w-4 h-4" /> : <LuMoon className="w-4 h-4" />}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

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
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:w-auto sm:px-0 transition-all duration-500 ${scrolled ? 'scale-95' : 'scale-100'}`}
    >
      
      {/* Desktop / Tablet Navigation */}
      <div className="hidden sm:block relative overflow-hidden rounded-full shadow-2xl py-1">
        <div className="absolute inset-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-2xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-full transition-colors duration-300" />
        <div className="relative flex items-center justify-center gap-2 px-4 py-2 min-w-max mx-auto w-fit">
          {links.map((link) => {
            const isActive = active === link;
            return (
              <button
                key={link}
                onClick={() => handleScroll(link)}
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full
                ${isActive ? "text-zinc-900 bg-zinc-100 dark:text-zinc-50 dark:bg-zinc-800" : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-800/50"}`}
              >
                {link}
              </button>
            );
          })}

          <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-800 mx-2 transition-colors duration-300" />

          <ThemeToggle />

          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="px-5 py-1.5 rounded-full text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 dark:text-zinc-950 dark:bg-zinc-100 dark:hover:bg-white transition-colors ml-1"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="sm:hidden flex items-center justify-between px-5 py-3 rounded-2xl bg-white/80 dark:bg-zinc-950/80 backdrop-blur-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl w-full max-w-sm mx-auto transition-colors duration-300">
        <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm tracking-widest uppercase">Portfolio</span>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 focus:outline-none p-1 transition-colors"
          >
            {isOpen ? <LuX size={20} /> : <LuMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-4 right-4 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-3xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-4 flex flex-col gap-2 sm:hidden shadow-2xl max-w-sm mx-auto origin-top transition-colors duration-300"
          >
            {links.map((link) => {
              const isActive = active === link;
              return (
                <button
                  key={link}
                  onClick={() => handleScroll(link)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors
                  ${isActive ? "text-zinc-900 bg-zinc-100 dark:text-zinc-50 dark:bg-zinc-900" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200"}`}
                >
                  {link}
                </button>
              );
            })}
            <div className="h-px w-full bg-zinc-200/50 dark:bg-zinc-800/50 my-2 transition-colors duration-300" />
            <button
              onClick={() => {
                setIsOpen(false);
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="w-full text-center px-4 py-3 rounded-xl text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:text-zinc-950 dark:bg-zinc-100 dark:hover:bg-white transition-colors"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
