"use client";

import React from "react";
import Link from "next/link";
import { LuDownload, LuFileCode2, LuBrain, LuRocket } from "react-icons/lu";

const About = () => {
    return (
        <section id="about" className="w-full bg-black px-6 py-24 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_50%)]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-6">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs tracking-widest uppercase text-white/80">
                            About Me
                        </p>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Full Stack Developer & <span className="text-cyan-400">AI Enthusiast</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="rounded-3xl border border-white/10 bg-white/3 p-8">
                            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>

                            <div className="space-y-4 text-white/70 leading-relaxed">
                                <p>
                                    I'm a passionate <span className="text-cyan-400 font-semibold">Full Stack Developer</span> specializing in building modern web applications with cutting-edge technologies. With expertise in both frontend and backend development, I create seamless digital experiences that solve real-world problems.
                                </p>

                                <p>
                                    My journey in tech has led me to work on diverse projects ranging from <span className="text-white font-medium">AI-powered healthcare platforms</span> to <span className="text-white font-medium">real-time collaboration tools</span>, always pushing the boundaries of what's possible with code.
                                </p>

                                <p>
                                    I'm particularly excited about <span className="text-cyan-400 font-semibold">AI/ML integration</span>, cloud architecture, and creating intuitive user experiences that make technology accessible to everyone.
                                </p>
                            </div>

                            <Link
                                href="/Resume.pdf"
                                download
                                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
                            >
                                <LuDownload className="w-5 h-5" />
                                <span>Download Resume</span>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-3xl border border-white/10 bg-white/3 p-8">
                            <h3 className="text-2xl font-bold mb-6">What I Do</h3>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                                        <LuFileCode2 className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Full Stack Development</h4>
                                        <p className="text-sm text-white/60">
                                            Building scalable web applications with React, Next.js, Node.js, and modern cloud infrastructure.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                                        <LuBrain className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">AI Integration</h4>
                                        <p className="text-sm text-white/60">
                                            Integrating AI/ML models into production systems using OpenAI, Gemini, and custom ML pipelines.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                                        <LuRocket className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">System Architecture</h4>
                                        <p className="text-sm text-white/60">
                                            Designing and implementing distributed systems, microservices, and real-time infrastructure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/3 p-8">
                            <div className="grid grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-cyan-400 mb-1">20+</div>
                                    <div className="text-xs text-white/60 uppercase tracking-wider">Projects</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-cyan-400 mb-1">10+</div>
                                    <div className="text-xs text-white/60 uppercase tracking-wider">Technologies</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-cyan-400 mb-1">100%</div>
                                    <div className="text-xs text-white/60 uppercase tracking-wider">Dedication</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
