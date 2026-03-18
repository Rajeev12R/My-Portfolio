"use client";

import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/home/Navbar";
import Landing from "./components/home/Landing";
import Features from "./components/home/Features";
import Projects from "./components/home/Projects";
import About from "./components/home/About";
import Certifications from "./components/home/Certifications";
import Contact from "./components/home/Contact";
import Footer from "./components/home/Footer";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Give components time to render while loader is showing
    const timer = setTimeout(() => {
      setLoading(false);
      // Small delay to ensure smooth transition
      setTimeout(() => setShowContent(true), 50);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader overlay */}
      {loading && <Loader />}

      {/* Main content - rendered during loading but hidden */}
      <div
        className={`w-full  overflow-x-hidden min-h-screen bg-black text-white flex flex-col transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'
          }`}
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
      </div>
    </>
  );
};

export default Page;
