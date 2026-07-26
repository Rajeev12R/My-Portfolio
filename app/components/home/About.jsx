"use client";

import React from "react";
import Link from "next/link";
import { LuDownload, LuFileCode2, LuBrain, LuRocket } from "react-icons/lu";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full bg-white dark:bg-black px-6 py-24 text-zinc-900 dark:text-zinc-100 relative overflow-hidden border-t border-zinc-200 dark:border-zinc-900/50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 mb-6 transition-colors duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 dark:text-zinc-400">
              About Me
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Full Stack Developer & <br/> <span className="text-zinc-500">AI Enthusiast</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-8 md:p-10 h-full flex flex-col transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6 tracking-tight text-zinc-900 dark:text-zinc-100">Who I Am</h3>

              <div className="space-y-6 text-zinc-600 dark:text-zinc-400 font-light leading-relaxed flex-1 transition-colors duration-300">
                <p>
                  I'm a passionate <span className="text-zinc-900 dark:text-zinc-200 font-medium">Full Stack Developer</span> specializing in building modern web applications with cutting-edge technologies. With expertise in both frontend and backend development, I create seamless digital experiences that solve real-world problems.
                </p>

                <p>
                  My journey in tech has led me to work on diverse projects ranging from <span className="text-zinc-900 dark:text-zinc-200 font-medium">AI-powered healthcare platforms</span> to <span className="text-zinc-900 dark:text-zinc-200 font-medium">real-time collaboration tools</span>, always pushing the boundaries of what's possible with code.
                </p>

                <p>
                  I'm particularly excited about <span className="text-zinc-900 dark:text-zinc-200 font-medium">AI/ML integration</span>, cloud architecture, and creating intuitive user experiences that make technology accessible to everyone.
                </p>
              </div>

              <Link
                href="/Resume.pdf"
                download
                className="mt-10 inline-flex w-fit items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black font-semibold hover:bg-zinc-800 dark:hover:bg-white transition-colors"
              >
                <LuDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-8 md:p-10 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-8 tracking-tight text-zinc-900 dark:text-zinc-100">What I Do</h3>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0 text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
                    <LuFileCode2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1 transition-colors duration-300">Full Stack Development</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light transition-colors duration-300">
                      Building scalable web applications with React, Next.js, Node.js, and modern cloud infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0 text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
                    <LuBrain className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1 transition-colors duration-300">AI Integration</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light transition-colors duration-300">
                      Integrating AI/ML models into production systems using OpenAI, Gemini, and custom ML pipelines.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0 text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
                    <LuRocket className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1 transition-colors duration-300">System Architecture</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light transition-colors duration-300">
                      Designing and implementing distributed systems, microservices, and real-time infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-8 transition-colors duration-300">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1 transition-colors duration-300">20+</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1 transition-colors duration-300">10+</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Technologies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1 transition-colors duration-300">100%</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Dedication</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
