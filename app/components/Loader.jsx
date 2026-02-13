"use client";

import React, { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const intervalTime = 30; 
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">

      <video
        src="/loader.mp4"
        width={520}
        height={520}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="block"
      />

      <div className="absolute bottom-72 w-full flex justify-center pointer-events-none">
        <p className="text-sm tracking-[0.3em] uppercase text-cyan-400 font-bold opacity-80">
          LOADING {Math.round(progress)}%
        </p>
      </div>

    </div>
  );
};

export default Loader;
