import React from "react";
import { Globe } from "../ui/globe";
import Image from "next/image";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";
const skills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "C++",
    "Java",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "WebSockets",
    "Socket.io",
    "Gemini AI",
    "Stripe",
    "Docker",
    "Git",
    "GitHub",
    "REST APIs",
    "Tailwind CSS",
    "Framer Motion",
    "Django",
];

const row1 = skills.slice(0, 8);
const row2 = skills.slice(8, 16);
const row3 = skills.slice(16);

const BentoGrid = () => {
    return (
        <section className="w-full bg-black px-6 py-24 text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px]">

                <div className="md:col-span-2 rounded-3xl bg-linear-to-b from-white/12 to-white/5 border border-white/10 backdrop-blur-xl p-6 flex flex-col gap-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden">

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504..." />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-white/50">
                                    GitHub Activity
                                </p>
                                <Link
                                    href="https://github.com/Rajeev12R/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-mono text-cyan-400 hover:text-cyan-300 transition"
                                >
                                    github.com/rajeev12r
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-cyan-400">650+</div>
                                <div className="text-xs text-white/50">Contributions</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-cyan-400">100+</div>
                                <div className="text-xs text-white/50">Repositories</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6 items-center flex-1">

                        <div className="grid grid-cols-14 gap-1 flex-1">
                            {Array.from({ length: 98 }).map((_, i) => {
                                // Use index-based pattern instead of random to avoid hydration mismatch
                                const intensity = (i * 7 + i % 5) % 5;
                                const colors = [
                                    "bg-white/5",
                                    "bg-cyan-500/20",
                                    "bg-cyan-500/40",
                                    "bg-cyan-500/60",
                                    "bg-cyan-500/90",
                                ];
                                return (
                                    <div
                                        key={i}
                                        className={`w-3 h-3 rounded-sm ${colors[intensity]}
              transition-all duration-200 hover:scale-125 hover:bg-cyan-400`}
                                    />
                                );
                            })}
                        </div>

                        <div className="space-y-2 min-w-40">
                            {[
                                { lang: "TypeScript", project: "Resume-AI", color: "bg-blue-400" },
                                { lang: "JavaScript", project: "Legal-Doc-AI", color: "bg-yellow-400" },
                                { lang: "C++", project: "ATM-QR-Wallet", color: "bg-purple-400" },
                            ].map((item) => (
                                <div
                                    key={item.project}
                                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                                        <span className="text-[8px] font-mono text-white/90">
                                            {item.lang}
                                        </span>
                                    </div>
                                    <p className="text-xs text-white/60">{item.project}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-xs text-white/60">
                        Consistent open-source contributions • Hackathon finalist •
                        Production-grade repositories
                    </p>
                </div>


                <div className="md:row-span-2 rounded-3xl bg-linear-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl p-6 overflow-hidden flex flex-col shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <h3 className="text-xl font-semibold mb-6">
                        Passionate about cutting-edge{" "}
                        <span className="text-cyan-400">technologies</span>
                    </h3>

                    <div className="space-y-4 flex-1 flex flex-col justify-start mt-4 min-h-0">

                        <div className="overflow-hidden">
                            <div className="flex w-max gap-3 animate-marquee-left">
                                {[...row1, ...row1].map((tech, i) => (
                                    <span
                                        key={`r1-${i}`}
                                        className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-mono text-white/70 whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <div className="flex w-max gap-3 animate-marquee-right">
                                {[...row2, ...row2].map((tech, i) => (
                                    <span
                                        key={`r2-${i}`}
                                        className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-mono text-white/70 whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <div className="flex w-max gap-3 animate-marquee-left-slow">
                                {[...row3, ...row3].map((tech, i) => (
                                    <span
                                        key={`r3-${i}`}
                                        className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-mono text-white/70 whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 flex items-center justify-center mt-6 min-h-0">
                            <Image
                                src="/profile.png"
                                alt="Profile"
                                width={200}
                                height={200}
                                className="rounded-full border border-white/20 shadow-lg"
                                priority
                            />
                        </div>

                    </div>
                </div>

                <div className="md:row-span-2 rounded-3xl bg-linear-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl p-6 flex flex-col relative overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">

                    <div>
                        <h3 className="text-xl font-semibold mb-2 leading-tight">
                            I'm very flexible with
                            <br />
                            <span className="text-cyan-400">time zone communications</span>
                        </h3>

                        <div className="flex gap-3 mt-4 text-sm">
                            <span className="px-3 py-1 rounded-full bg-white/10">🇬🇧 UK</span>
                            <span className="px-3 py-1 rounded-full bg-white/10">🇮🇳 India</span>
                            <span className="px-3 py-1 rounded-full bg-white/10">🇺🇸 USA</span>
                        </div>
                    </div>

                    <div className="relative flex-1 flex items-center justify-center min-h-0">
                        <div className="absolute w-70 h-[28h-70ded-full border border-cyan-500/30 blur-md" />
                        <div className="relative z-10 w-70 h-70">
                            <Globe className="w-full h-full opacity-90" />
                        </div>
                    </div>

                    <p className="text-xs uppercase tracking-widest text-white/60">
                        Remote · India
                    </p>
                </div>

                <div className="md:row-span-1 rounded-3xl bg-linear-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <div>
                        <h3 className="text-2xl font-semibold leading-tight mb-3">
                            Let’s work together
                            <br />
                            on your next project
                        </h3>

                        <p className="text-white/60 text-sm max-w-xs">
                            Open to freelance, internships, and full-time opportunities.
                        </p>
                    </div>
                    <div className="flex items-center gap-5">
                        <button className="w-fit px-5 py-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition text-sm font-medium">
                            rjranjan2112@gmail.com
                        </button>
                        <div className="flex items-center gap-3">

                            <Link href="https://github.com/Rajeev12R/" target="_blank" className="p-2 border border-white/40 rounded-lg cursor-pointer hover:border-white transition-all duration-150">
                                <LuGithub />
                            </Link>
                            <Link href="https://linkedin.com/in/rejeev12r" target="_blank" className="p-2 border border-white/40 rounded-lg cursor-pointer hover:border-white transition-all duration-150">
                                <LuLinkedin />
                            </Link>
                            <Link href="https://github.com/rejeev12r" target="_blank" className="p-2 border border-white/40 rounded-lg cursor-pointer hover:border-white transition-all duration-150">
                                <LuTwitter />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 rounded-3xl bg-linear-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-2">
                        The inside scoop
                    </p>
                    <p className="text-lg text-white/90">
                        Currently building a SaaS application using Next.js, PostgreSQL,
                        AgenticAI, and real-time infrastructure.
                    </p>

                    <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { name: "Medicare-AI", desc: "AI-powered healthcare platform" },
                            { name: "Converge-X", desc: "Real-time collaboration system" },
                            { name: "Resume-AI", desc: "Smart resume analysis engine" },
                            { name: "LegalDoc-AI", desc: "Automated legal document parsing" },
                            { name: "SignalNet", desc: "Low-latency messaging infra" },
                        ].map((project) => (
                            <div
                                key={project.name}
                                className="relative rounded-xl border border-white/10 bg-white/5 p-3 overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <p className="text-xs font-mono text-white/90 mb-1">
                                        {project.name}
                                    </p>
                                    <p className="text-xs text-white/50 leading-snug">
                                        {project.desc}
                                    </p>
                                </div>

                                <div className="absolute inset-0 backdrop-blur-md bg-black/25" />
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BentoGrid;
