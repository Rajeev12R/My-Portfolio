import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
    "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL",
    "WebSockets", "Socket.io", "Gemini AI", "Docker", "Tailwind CSS", "Framer Motion",
    "Python", "REST APIs", "WebRTC", "Prisma", "Redis", "AWS", "Vercel", "GraphQL",
    "Redux", "Next Auth", "MERN Stack"
];

const row1 = skills.slice(0, 8);
const row2 = skills.slice(8, 16);
const row3 = skills.slice(16);

const BentoGrid = () => {
    return (
        <section className="w-full bg-white dark:bg-black px-6 py-24 text-zinc-900 dark:text-zinc-100 border-t border-zinc-200 dark:border-zinc-900/50 transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-4"
            >

                {/* GitHub & LeetCode Stats Row */}
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* GitHub Card */}
                    <div className="rounded-[2rem] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col gap-8 overflow-hidden relative group hover:bg-zinc-100 dark:hover:bg-zinc-900/60 transition-colors duration-500">
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black flex items-center justify-center shrink-0 transition-colors duration-300">
                                    <LuGithub className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1 transition-colors duration-300">
                                        GitHub Activity
                                    </p>
                                    <Link href="https://github.com/Rajeev12R/" target="_blank" className="text-sm font-mono text-zinc-900 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
                                        rajeev12r
                                    </Link>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div>
                                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">238</div>
                                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Commits</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">104</div>
                                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Repos</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-1.5 justify-center w-full max-w-full overflow-x-auto no-scrollbar mt-auto" style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}>
                            {Array.from({ length: 70 }).map((_, i) => {
                                const intensity = (i * 7 + i % 5) % 5;
                                const colors = [
                                    "bg-zinc-200 dark:bg-zinc-800",
                                    "bg-zinc-300 dark:bg-zinc-600",
                                    "bg-zinc-400 dark:bg-zinc-400",
                                    "bg-emerald-500 dark:bg-emerald-500",
                                    "bg-emerald-600 dark:bg-emerald-400",
                                ];
                                return (
                                    <div key={i} className={`w-3 h-3 rounded-[3px] ${colors[intensity]} transition-transform duration-300 hover:scale-125`} />
                                );
                            })}
                        </div>
                    </div>

                    {/* LeetCode Card */}
                    <div className="rounded-[2rem] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col gap-8 overflow-hidden relative group hover:bg-zinc-100 dark:hover:bg-zinc-900/60 transition-colors duration-500">
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#FFA116]/10 text-[#FFA116] flex items-center justify-center shrink-0 transition-colors duration-300">
                                    <SiLeetcode className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1 transition-colors duration-300">
                                        LeetCode Profile
                                    </p>
                                    <Link href="https://leetcode.com/u/Rajeev12R/" target="_blank" className="text-sm font-mono text-zinc-900 dark:text-zinc-300 hover:text-[#FFA116] transition-colors">
                                        Rajeev12R
                                    </Link>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div>
                                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">479</div>
                                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Solved</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">1,499</div>
                                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Rating</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mt-auto">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-mono w-12 text-[#00b8a3]">Easy</span>
                                <div className="flex-1 h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#00b8a3]" style={{ width: '40%' }} />
                                </div>
                                <span className="text-xs font-mono text-zinc-900 dark:text-zinc-100 w-8 text-right">204</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-mono w-12 text-[#ffc01e]">Med</span>
                                <div className="flex-1 h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#ffc01e]" style={{ width: '65%' }} />
                                </div>
                                <span className="text-xs font-mono text-zinc-900 dark:text-zinc-100 w-8 text-right">238</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-mono w-12 text-[#ff375f]">Hard</span>
                                <div className="flex-1 h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#ff375f]" style={{ width: '15%' }} />
                                </div>
                                <span className="text-xs font-mono text-zinc-900 dark:text-zinc-100 w-8 text-right">37</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Tech Stack Card */}
                <div className="md:col-span-2 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-8 overflow-hidden flex flex-col gap-8 relative group hover:bg-zinc-100 dark:hover:bg-zinc-900/60 transition-colors duration-500 min-h-70">
                    <h3 className="text-2xl font-semibold leading-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                        Passionate about <br />
                        <span className="text-zinc-500">cutting-edge tech</span>
                    </h3>

                    <div className="space-y-6 flex-1 flex flex-col justify-start min-h-0 pt-4">
                        <div className="overflow-hidden mask-horizontal">
                            <div className="flex w-max gap-3 animate-marquee-left">
                                {[...row1, ...row1].map((tech, i) => (
                                    <span key={`r1-${i}`} className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-mono text-zinc-600 dark:text-zinc-400 whitespace-nowrap transition-colors duration-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="overflow-hidden mask-horizontal">
                            <div className="flex w-max gap-3 animate-marquee-right">
                                {[...row2, ...row2].map((tech, i) => (
                                    <span key={`r2-${i}`} className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-mono text-zinc-600 dark:text-zinc-400 whitespace-nowrap transition-colors duration-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="overflow-hidden mask-horizontal">
                            <div className="flex w-max gap-3 animate-marquee-left-slow">
                                {[...row3, ...row3].map((tech, i) => (
                                    <span key={`r3-${i}`} className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-mono text-zinc-600 dark:text-zinc-400 whitespace-nowrap transition-colors duration-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location/Timezone Card */}
                <div className="md:col-span-1 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col gap-6 relative overflow-hidden group hover:bg-zinc-100 dark:hover:bg-zinc-900/60 transition-colors duration-500 min-h-70">
                    <div>
                        <h3 className="text-xl font-semibold leading-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                            Flexible across <br />
                            <span className="text-zinc-500">time zones</span>
                        </h3>

                        <div className="flex flex-wrap gap-3 mt-8 text-xs font-mono text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
                            <span className="px-3 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">🇬🇧 UK</span>
                            <span className="px-3 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">🇮🇳 IND</span>
                            <span className="px-3 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">🇺🇸 USA</span>
                            <span className="px-3 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">🇦🇺 AUS</span>
                        </div>
                    </div>
                </div>

                {/* Current Focus Card */}
                <div className="md:col-span-2 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col gap-6 group hover:bg-zinc-100 dark:hover:bg-zinc-900/60 transition-colors duration-500 min-h-70">
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                        The Inside Scoop
                    </p>
                    <p className="text-xl text-zinc-700 dark:text-zinc-300 font-light leading-relaxed max-w-3xl transition-colors duration-300">
                        Currently building a SaaS application using Next.js, PostgreSQL, AgenticAI, and real-time infrastructure. Focus on reliability and scale.
                    </p>

                    <div className="mt-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "Converge-X", desc: "Collaboration system" },
                            { name: "Resume-AI", desc: "Resume engine" },
                            { name: "ChessReal", desc: "Real-time game" },
                            { name: "LegalDoc-AI", desc: "AI Automation" },
                        ].map((project) => (
                            <div key={project.name} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-4 transition-colors duration-300">
                                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{project.name}</p>
                                <p className="text-xs text-zinc-500">{project.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Card */}
                <div className="md:col-span-1 rounded-[2rem] bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 p-8 flex flex-col justify-between gap-6 relative hover:scale-[1.01] transition-transform duration-300 min-h-70">
                    <div>
                        <h3 className="text-2xl font-bold leading-tight mb-2">
                            Let’s work together
                        </h3>
                        <p className="text-zinc-400 dark:text-zinc-600 text-xs font-medium transition-colors duration-300">
                            Open to freelance, internships, and full-time roles.
                        </p>
                    </div>
                    <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 mt-auto">
                        <button className="px-5 py-2.5 rounded-full bg-white text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-800 transition-colors text-xs font-bold tracking-wide w-full xl:w-auto">
                            Email Me
                        </button>
                        <div className="flex items-center gap-2">
                            <Link href="https://github.com/Rajeev12R/" target="_blank" className="p-2.5 bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-200 dark:hover:bg-zinc-300 rounded-full transition-colors text-white dark:text-zinc-950">
                                <LuGithub className="w-4 h-4" />
                            </Link>
                            <Link href="https://linkedin.com/in/rejeev12r" target="_blank" className="p-2.5 bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-200 dark:hover:bg-zinc-300 rounded-full transition-colors text-white dark:text-zinc-950">
                                <LuLinkedin className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default BentoGrid;
