"use client";

import React from "react";
import Navbar from "./components/home/Navbar";
import Landing from "./components/home/Landing";
import Features from "./components/home/Features";
import Projects from "./components/home/Projects";
import About from "./components/home/About";
import Certifications from "./components/home/Certifications";
import Contact from "./components/home/Contact";
import Footer from "./components/home/Footer";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full overflow-x-hidden min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-200 flex flex-col transition-colors duration-300"
    >
      <div className="h-24" />
      <Navbar />
      <Landing />
      <Features />
      <Projects />
      <About />
      <Certifications />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Page;
