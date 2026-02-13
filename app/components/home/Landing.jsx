import React from "react";
import Link from "next/link";

const Landing = () => {
    return (
        <section id="home" className="relative w-full min-h-[calc(100vh-96px)] bg-black text-white overflow-hidden">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] opacity-20" />

            <div className="relative max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[calc(100vh-96px)]">

                <div className="space-y-8">

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs tracking-widest uppercase text-white/80">
                            Building Production Systems
                        </p>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Engineering <span className="gradient-text">Production-Grade</span>
                        <br />
                        Web & AI Systems
                    </h1>

                    <p className="text-white/70 text-lg max-w-xl leading-relaxed">
                        I’m <span className="text-white font-semibold">Rajeev Ranjan</span>,
                        a Full Stack Developer and AI Engineer focused on building
                        <span className="text-white"> scalable, secure, and real-time systems</span>.
                        From AI healthcare platforms to immersive virtual environments,
                        I design products that survive real users—not demos.
                    </p>

                    <div className="flex flex-wrap gap-3 text-sm font-mono text-white/70">
                        {[
                            "Next.js",
                            "MERN",
                            "GenAI",
                            "AgenticAI",
                            "WebSockets",
                            "PostgreSQL",
                            "MongoDB",
                            "Docker",
                            "C++",
                            "Python"
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition"
                            >
                                {tech}
                            </span>
                        ))}
                        <span className="mt-2 text-cyan-500">etc..</span>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button
                            onClick={() => {
                                const element = document.getElementById("projects");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }}
                            className="px-6 py-3 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
                        >
                            View Work
                        </button>

                        <Link
                            href="/Resume.pdf"
                            download
                            className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 inline-flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105"
                        >
                            Resume
                        </Link>
                    </div>
                </div>

                <div className="relative flex justify-center items-center">

                    <div className="absolute w-105 h-105 rounded-full border border-cyan-500/30 blur-xl" />

                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xl animate-pulse-glow">
                        <img
                            src="/me.png"
                            alt="Rajeev Ranjan"
                            className="w-full h-full object-cover  transition duration-500"
                        />
                    </div>
                    <Link href="https://github.com/rajeev12r" className="absolute -bottom-10 right-6 px-4 py-2 rounded-lg bg-black/80 border border-white/20 font-mono text-xs text-cyan-400 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                        &gt; view_github()
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Landing;
