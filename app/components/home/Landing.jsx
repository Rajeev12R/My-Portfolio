import React from "react";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";


const glossyCells = new Set([
    // Left cluster (diamond lattice pattern)
    "5,3",
    "4,4",
    "5,5",
    "4,6",
    "5,7",
    "4,8",

    // Right cluster (mirrored diamond lattice pattern)
    "19,2",
    "18,3", "20,3",
    "19,4",
    "18,5", "20,5",
    "19,6",
    "18,7", "20,7",
    "19,8"
]);

const BackgroundGrid = () => {
    return (
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none z-0">
            <div
                className="w-600 h-350 grid grid-cols-[repeat(24,100px)] grid-rows-[repeat(14,100px)] opacity-70 dark:opacity-80"
                style={{
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                }}
            >
                {Array.from({ length: 336 }).map((_, i) => {
                    const x = i % 24;
                    const y = Math.floor(i / 24);
                    const isGlossy = glossyCells.has(`${x},${y}`);

                    return (
                        <div key={i} className="relative border-r border-b border-black/8 dark:border-white/5">
                            {isGlossy && (
                                <div className="absolute -top-px -left-px -right-px -bottom-px rounded-[24px] border border-white/60 border-t-white border-l-white bg-white/20 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.1),inset_0_0_20px_rgba(255,255,255,0.6)] backdrop-blur-md dark:border-white/10 dark:border-t-white/30 dark:border-l-white/30 dark:bg-white/5 dark:shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] z-10" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

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
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-300/50 dark:bg-orange-900/20 blur-[100px] dark:blur-[120px]" />
                <div className="absolute top-[20%] -right-[10%] w-[45%] h-[55%] rounded-full bg-purple-300/50 dark:bg-purple-900/20 blur-[100px] dark:blur-[120px]" />
                <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-300/50 dark:bg-blue-900/20 blur-[100px] dark:blur-[120px]" />
                <div className="absolute bottom-[10%] right-[20%] w-[30%] h-[40%] rounded-full bg-emerald-300/50 dark:bg-emerald-900/20 blur-[100px] dark:blur-[120px]" />

                <BackgroundGrid />
            </div>

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
