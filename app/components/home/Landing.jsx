import React from "react";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const Landing = () => {
    return (
        <section id="home" className="relative w-full min-h-dvh bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 overflow-hidden flex items-center justify-center pt-1 pb-12 transition-colors duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.04)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)] opacity-100 dark:opacity-50 transition-colors duration-300" />

            <div className="relative max-w-4xl mx-auto px-6 md:px-10 flex flex-col items-center text-center w-full">

                <motion.div
                    className="space-y-8 flex flex-col items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <p className="text-xs font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
                            Available for Freelance & Internships
                        </p>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
                        Rajeev Ranjan
                    </motion.h1>

                    <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl text-zinc-600 dark:text-zinc-400 font-medium tracking-tight transition-colors duration-300">
                        Full Stack Developer <span className="text-zinc-400 dark:text-zinc-600">&</span> AI Engineer
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-light transition-colors duration-300">
                        I engineer high-performance web applications using the <span className="text-zinc-900 dark:text-zinc-100 font-medium">MERN stack</span>, <span className="text-zinc-900 dark:text-zinc-100 font-medium">Next.js</span>, and <span className="text-zinc-900 dark:text-zinc-100 font-medium">WebSockets</span>. Specializing in real-time systems and intelligent <span className="text-zinc-900 dark:text-zinc-100 font-medium">AI/LLM integrations</span> that drive measurable impact.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-500 pt-2 max-w-2xl">
                        {["React", "Next.js", "Node.js", "TypeScript", "Socket.io", "WebRTC", "PostgreSQL", "MongoDB", "Gemini AI"].map((tech) => (
                            <span key={tech} className="px-3 py-1.5 rounded-md bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/30 transition-colors duration-300">
                                {tech}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-4 pt-6">
                        <button
                            onClick={() => {
                                const element = document.getElementById("projects");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }}
                            className="px-8 py-3.5 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-bold hover:bg-zinc-800 dark:hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                        >
                            View Projects
                        </button>

                        <Link
                            href="/Resume.pdf"
                            download
                            className="px-8 py-3.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 inline-flex items-center justify-center font-medium"
                        >
                            Download Resume
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-center gap-6 pt-8 text-zinc-500 dark:text-zinc-400">
                        <Link href="https://github.com/rajeev12r" target="_blank" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                            <LuGithub className="w-5 h-5" />
                        </Link>
                        <Link href="https://linkedin.com/in/rejeev12r" target="_blank" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                            <LuLinkedin className="w-5 h-5" />
                        </Link>
                        <Link href="https://leetcode.com/u/Rajeev12R/" target="_blank" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                            <SiLeetcode className="w-5 h-5" />
                        </Link>
                        <Link href="mailto:rjranjan2112@gmail.com" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                            <LuMail className="w-5 h-5" />
                        </Link>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Landing;
